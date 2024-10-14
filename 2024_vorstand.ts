type VorstandsPosition =
	| 'Vereinsführer'
	| 'Stellv. Vereinsführer'
	| 'Schriftführer'
	| 'Gerätewart'
	| 'Oberst'
	| 'Major'
	| 'Hauptmann'
	| 'Adjutant vom Oberst'
	| 'Adjutant vom Major'
	| 'Adjutant vom Hauptmann'
	| 'Fähnrich'
	| '1. Fahnenoffizier'
	| '2. Fahnenoffizier'
	| 'Feldwebel'
	| 'Kutscher';

export interface VorstandsMitglied {
	filename: string;
	srcL: string;
	srcXL: string;
	width: number;
	height: number;
	srcS: string;
	srcM: string;
	position: VorstandsPosition;
	firstname: string;
	lastname: string;
}

export const vorstand2024Einzelbilder: VorstandsMitglied[] = [
	{
		filename: 'IMG 20241009 WA0176.webp',
		srcL: 'https://iili.io/2Hwl0H7.md.webp',
		srcXL: 'https://iili.io/2Hwl0H7.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlWVj.md.webp',
		srcM: 'https://iili.io/2HwlWVj.webp',
		position: 'Vereinsführer',
		firstname: 'Chris',
		lastname: 'Frankemölle',
	},
	{
		filename: 'IMG 20241009 WA0162.webp',
		srcL: 'https://iili.io/2HwlINn.md.webp',
		srcXL: 'https://iili.io/2HwlINn.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2Hwl5P4.md.webp',
		srcM: 'https://iili.io/2Hwl5P4.webp',
		position: 'Stellv. Vereinsführer',
		firstname: 'Thomas',
		lastname: 'Schmitz',
	},
	{
		filename: 'IMG 20241009 WA0182.webp',
		srcL: 'https://iili.io/2Hwl1R9.md.webp',
		srcXL: 'https://iili.io/2Hwl1R9.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwljKQ.md.webp',
		srcM: 'https://iili.io/2HwljKQ.webp',
		position: 'Schriftführer',
		firstname: 'Lukas',
		lastname: 'Kampshoff',
	},
	{
		filename: 'IMG 20241009 WA0133.webp',
		srcL: 'https://iili.io/2Hw09f4.md.webp',
		srcXL: 'https://iili.io/2Hw09f4.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlmWG.md.webp',
		srcM: 'https://iili.io/2HwlmWG.webp',
		position: 'Gerätewart',
		firstname: 'Felix',
		lastname: 'Schulze Sindern',
	},
	{
		filename: 'IMG 20241009 WA0180.webp',
		srcL: 'https://iili.io/2HwlENe.md.webp',
		srcXL: 'https://iili.io/2HwlENe.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlXix.md.webp',
		srcM: 'https://iili.io/2HwlXix.webp',
		position: 'Oberst',
		firstname: 'Matthias',
		lastname: 'Welling',
	},
	{
		filename: 'IMG 20241009 WA0168.webp',
		srcL: 'https://iili.io/2HwlRVf.md.webp',
		srcXL: 'https://iili.io/2HwlRVf.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2Hwlal2.md.webp',
		srcM: 'https://iili.io/2Hwlal2.webp',
		position: 'Major',
		firstname: 'Robin',
		lastname: 'Heisterkamp',
	},
	{
		filename: 'IMG 20241009 WA0140.webp',
		srcL: 'https://iili.io/2Hw0357.md.webp',
		srcXL: 'https://iili.io/2Hw0357.webp',
		width: 3024,
		height: 4032,
		srcS: 'https://iili.io/2Hw02JS.md.webp',
		srcM: 'https://iili.io/2Hw02JS.webp',
		position: 'Hauptmann',
		firstname: 'Jonas',
		lastname: 'Poth',
	},
	{
		filename: 'IMG 20241009 WA0130.webp',
		srcL: 'https://iili.io/2Hwlriv.md.webp',
		srcXL: 'https://iili.io/2Hwlriv.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlZOX.md.webp',
		srcM: 'https://iili.io/2HwlZOX.webp',
		position: 'Fähnrich',
		firstname: 'David',
		lastname: 'Mölders',
	},
	{
		filename: 'WhatsApp Image 2024 10 08 at 22.18.24 485541f9.webp',
		srcL: 'https://iili.io/2HwlGDu.md.webp',
		srcXL: 'https://iili.io/2HwlGDu.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlkR1.md.webp',
		srcM: 'https://iili.io/2HwlkR1.webp',
		position: '1. Fahnenoffizier',
		firstname: 'Lukas',
		lastname: 'Gustedt',
	},
	{
		filename: 'IMG 20241009 WA0138.webp',
		srcL: 'https://iili.io/2Hw0Jg2.md.webp',
		srcXL: 'https://iili.io/2Hw0Jg2.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2Hwlpsf.md.webp',
		srcM: 'https://iili.io/2Hwlpsf.webp',
		position: '2. Fahnenoffizier',
		firstname: 'Finn',
		lastname: 'Hölter',
	},
	{
		filename: 'IMG 20241009 WA0100.webp',
		srcL: 'https://iili.io/2HwlNUB.md.webp',
		srcXL: 'https://iili.io/2HwlNUB.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlvOF.md.webp',
		srcM: 'https://iili.io/2HwlvOF.webp',
		position: 'Feldwebel',
		firstname: 'Hendrik',
		lastname: 'Welling',
	},
	{
		filename: 'IMG 20241009 WA0171.webp',
		srcL: 'https://iili.io/2HwlTts.md.webp',
		srcXL: 'https://iili.io/2HwlTts.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlVob.md.webp',
		srcM: 'https://iili.io/2HwlVob.webp',
		position: 'Adjutant vom Oberst',
		firstname: 'Joshua',
		lastname: 'Hidding',
	},
	{
		filename: 'IMG 20241009 WA0143.webp',
		srcL: 'https://iili.io/2Hw0Fe9.md.webp',
		srcXL: 'https://iili.io/2Hw0Fe9.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlYKl.md.webp',
		srcM: 'https://iili.io/2HwlYKl.webp',
		position: 'Adjutant vom Major',
		firstname: 'Janis',
		lastname: 'Wiltink',
	},
	{
		filename: 'IMG 20241009 WA0171.webp',
		srcL: 'https://iili.io/2HwlTts.md.webp',
		srcXL: 'https://iili.io/2HwlTts.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlVob.md.webp',
		srcM: 'https://iili.io/2HwlVob.webp',
		position: 'Adjutant vom Hauptmann',
		firstname: 'Mirko',
		lastname: 'Renzel',
	},
	{
		filename: 'IMG 20241009 WA0152.webp',
		srcL: 'https://iili.io/2HwlAoG.md.webp',
		srcXL: 'https://iili.io/2HwlAoG.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2HwlcSS.md.webp',
		srcM: 'https://iili.io/2HwlcSS.webp',
		position: 'Kutscher',
		firstname: 'Jonas',
		lastname: 'Wübling',
	},
];

export const vostand2024Rest = {
	filename: 'IMG 20241009 WA0115.webp',
	srcL: 'https://iili.io/2Hwl6fR.md.webp',
	srcXL: 'https://iili.io/2Hwl6fR.webp',
	width: 5120,
	height: 3840,
	srcS: 'https://iili.io/2HwlUxa.md.webp',
	srcM: 'https://iili.io/2HwlUxa.webp',
};

export const vostand2024Geschaeftsfuehrend = {
	filename: 'IMG 20241009 WA0122.webp',
	srcL: 'https://iili.io/2HwlLJI.md.webp',
	srcXL: 'https://iili.io/2HwlLJI.webp',
	width: 3840,
	height: 5120,
	srcS: 'https://iili.io/2Hwl8Dg.md.webp',
	srcM: 'https://iili.io/2Hwl8Dg.webp',
};

export const vostand2024Fahne = {
	filename: 'IMG 20241009 WA0125.webp',
	srcL: 'https://iili.io/2Hwlbxs.md.webp',
	srcXL: 'https://iili.io/2Hwlbxs.webp',
	width: 3840,
	height: 5120,
	srcS: 'https://iili.io/2HwlQRt.md.webp',
	srcM: 'https://iili.io/2HwlQRt.webp',
};
