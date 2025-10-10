import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import exifr from 'exifr';
import { parseArgs } from './parse-args.ts';

const SIZES: number[] = [400, 1000];
const FORMATS = ['webp'] as const;

async function ensureDir(dir: string): Promise<void> {
	await fs.rm(dir, { recursive: true, force: true });
	await fs.mkdir(dir, { recursive: true });
}

async function processImage(
	file: string,
	inputDir: string,
	outputDir: string,
	index: number,
	totalNumberOfImages: number,
): Promise<void> {
	const filePath = path.join(inputDir, file);
	const padLength = String(totalNumberOfImages).length;
	const baseName = String(index).padStart(padLength, '0');

	for (const size of SIZES) {
		const sizeDir = path.join(outputDir, String(size));

		for (const format of FORMATS) {
			const outPath = path.join(sizeDir, `${baseName}.${format}`);
			try {
				await sharp(filePath)
					.rotate()
					.resize({ width: size, height: size, fit: 'outside' }) // keep aspect ratio
					.toFormat(format, { quality: 70 })
					.toFile(outPath);

				console.log(`✅ ${filePath} -> ${outPath}`);
			} catch (e) {
				console.log(`Image could not be processed: ${file}`);
				console.log(e);
			}
		}
	}
}

async function main(): Promise<void> {
	const { inputDir, outputDir } = parseArgs(process.argv);
	if (!inputDir || !outputDir) {
		throw new Error(
			'Usage: node compress.ts --input-dir <dir> --output-dir <dir>',
		);
	}

	const files: string[] = await fs.readdir(inputDir);

	const imageFiles = files.filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f));

	const filesWithDates = await Promise.all(
		imageFiles.map(async f => {
			const filePath = path.join(inputDir, f);
			let dateTaken: Date | null = null;
			try {
				const exif = await exifr.parse(filePath, ['DateTimeOriginal']);
				if (exif && exif.DateTimeOriginal) {
					dateTaken = exif.DateTimeOriginal;
				}
			} catch {
				// ignore files without exif
			}
			// fallback: file modified time
			if (!dateTaken) {
				const stat = await fs.stat(filePath);
				dateTaken = stat.mtime;
			}
			return { file: f, date: dateTaken };
		}),
	);

	const sortedFiles = filesWithDates
		.sort((a, b) => a.date.getTime() - b.date.getTime())
		.map(entry => entry.file);

	if (sortedFiles.length === 0) {
		console.log('No images found in input dir.');
		return;
	}

	await Promise.all(
		SIZES.map(size => ensureDir(path.join(outputDir, String(size)))),
	);

	await Promise.all(
		sortedFiles.map((file, i) => {
			try {
				processImage(file, inputDir, outputDir, i, sortedFiles.length);
			} catch (e) {
				console.log(`Image could not be processed: ${file}`);
				console.log(e);
			}
		}),
	);
}

main();
