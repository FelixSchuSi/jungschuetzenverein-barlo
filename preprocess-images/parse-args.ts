export interface CliArgs {
	inputDir: string | undefined;
	outputDir: string | undefined;
	albumId: string | undefined;
	apiKey: string | undefined;
	outputFile: string | undefined;
}

export function parseArgs(argv: string[]): CliArgs {
	const args: Record<string, string> = {};
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (arg === undefined) continue;
		if (arg.startsWith('--')) {
			const key = arg.replace(/^--/, '');
			const value = argv[i + 1];
			if (!value || value.startsWith('--')) {
				throw new Error(`Missing value for argument: ${arg}`);
			}
			args[key] = value;
			i++;
		}
	}

	return {
		inputDir: args['input-dir'],
		outputDir: args['output-dir'],
		albumId: args['album-id'],
		apiKey: args['api-key'],
		outputFile: args['output-file'],
	};
}
