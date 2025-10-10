import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import FormData from 'form-data';
import { parseArgs } from './parse-args.ts';

async function uploadImage(
	filePath: string,
	apiKey: string,
): Promise<{ name: string; url: string }> {
	const dirsAndFiles = filePath.split('/');
	dirsAndFiles.shift();
	const name = dirsAndFiles.join('-');

	const formData = new FormData();
	formData.append('key', apiKey);
	formData.append('action', 'upload');
	formData.append('source', fsSync.createReadStream(filePath));
	formData.append('format', 'json');

	const response = await fetch('https://freeimage.host/api/1/upload', {
		method: 'POST',
		body: formData,
	});

	const json = (await response.json()) as any;
	if (json.status_code === 200 && json.image?.url) {
		console.log(`✅ Uploaded ${name} -> ${json.image.url}`);
		return { name, url: json.image.url };
	} else {
		throw new Error(
			`Failed to upload ${name}: ${json.status_txt || 'Unknown error'} ${response} `,
		);
	}
}

async function getAllImages(dir: string): Promise<string[]> {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files: string[] = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await getAllImages(fullPath)));
		} else if (/\.(jpe?g|png|webp|avif)$/i.test(entry.name)) {
			files.push(fullPath);
		}
	}

	return files;
}

async function uploadAllImages(
	dir: string,
	apiKey: string,
): Promise<
	{
		name: string;
		url: string;
	}[]
> {
	const files = await getAllImages(dir);
	const imageFiles = files.filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f));
	const result: { name: string; url: string }[] = [];
	let i = 0;
	for (const file of imageFiles) {
		if (i >= 11) {
			break;
		}
		i++;
		try {
			result.push(await uploadImage(file, apiKey));
		} catch (err) {
			console.error(err);
		}
	}
	return result;
}

const { inputDir, apiKey, outputFile } = parseArgs(process.argv);
if (!inputDir || !apiKey || !outputFile) {
	throw new Error(
		'Usage: node upload.ts --input-dir <dir> --api-key <api-key> --output-file <file>',
	);
}
if (!outputFile.toLowerCase().endsWith('.json')) {
	throw new Error('output-file has to be a .json file');
}

const result = await uploadAllImages(inputDir, apiKey);

const grouped: Record<string, typeof result> = {};
for (const item of result) {
	const key = item.name.split('-')[1]!;
	(grouped[key] ??= []).push(item);
}

const output = Object.entries(grouped).map(([key, items]) => ({
	name: key,
	srcXL: items[0]?.url,
	srcS: items[1]?.url,
}));

await fs.writeFile(outputFile, JSON.stringify(output));
await fs.writeFile(
	`./${new Date().toISOString()}-tmp.json`,
	JSON.stringify(output),
);
console.log(output);
