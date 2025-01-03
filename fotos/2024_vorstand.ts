type VorstandsPosition =
	| 'Vereins&shy;führer'
	| 'Stellv. Vereins&shy;führer'
	| 'Schrift&shy;führer'
	| 'Geräte&shy;wart'
	| 'O&shy;berst'
	| 'Ma&shy;jor'
	| 'Haupt&shy;mann'
	| 'Ad&shy;ju&shy;tant vom O&shy;berst'
	| 'Ad&shy;ju&shy;tant vom Ma&shy;jor'
	| 'Ad&shy;jut&shy;ant vom Haupt&shy;mann'
	| 'Fähn&shy;rich'
	| '1. Fahnen&shy;offi&shy;zier'
	| '2. Fahnen&shy;offi&shy;zier'
	| 'Feld&shy;webel'
	| 'Kut&shy;scher';

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
		// srcS: 'https://iili.io/2HwlWVj.md.webp',
		// srcM: 'https://iili.io/2HwlWVj.webp',
		srcS: 'https://iili.io/2zMijBj.md.webp',
		srcM: 'https://iili.io/2zMijBj.webp',
		position: 'Vereins&shy;führer',
		firstname: 'Chris',
		lastname: 'Frankemölle',
	},
	{
		filename: 'IMG 20241009 WA0162.webp',
		srcL: 'https://iili.io/2HwlINn.md.webp',
		srcXL: 'https://iili.io/2HwlINn.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2Hwl5P4.md.webp',
		// srcM: 'https://iili.io/2Hwl5P4.webp',
		srcS: 'https://iili.io/2zMiWhu.md.webp',
		srcM: 'https://iili.io/2zMiWhu.webp',
		position: 'Stellv. Vereins&shy;führer',
		firstname: 'Thomas',
		lastname: 'Schmitz',
	},
	{
		filename: 'IMG 20241009 WA0182.webp',
		srcL: 'https://iili.io/2Hwl1R9.md.webp',
		srcXL: 'https://iili.io/2Hwl1R9.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2HwljKQ.md.webp',
		// srcM: 'https://iili.io/2HwljKQ.webp',
		srcS: 'https://iili.io/2zMiUTF.md.webp',
		srcM: 'https://iili.io/2zMiUTF.webp',
		position: 'Schrift&shy;führer',
		firstname: 'Lukas',
		lastname: 'Kampshoff',
	},
	{
		filename: 'IMG 20241009 WA0133.webp',
		srcL: 'https://iili.io/2Hw09f4.md.webp',
		srcXL: 'https://iili.io/2Hw09f4.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2HwlmWG.md.webp',
		// srcM: 'https://iili.io/2HwlmWG.webp',
		srcS: 'https://iili.io/2zMiXLb.md.webp',
		srcM: 'https://iili.io/2zMiXLb.webp',
		position: 'Geräte&shy;wart',
		firstname: 'Felix',
		lastname: 'Schulze Sindern',
	},
	{
		filename: 'IMG 20241009 WA0180.webp',
		srcL: 'https://iili.io/2HwlENe.md.webp',
		srcXL: 'https://iili.io/2HwlENe.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2HwlXix.md.webp',
		// srcM: 'https://iili.io/2HwlXix.webp',
		srcS: 'https://iili.io/2zMighg.md.webp',
		srcM: 'https://iili.io/2zMighg.webp',
		position: 'O&shy;berst',
		firstname: 'Matthias',
		lastname: 'Welling',
	},
	{
		filename: 'IMG 20241009 WA0168.webp',
		srcL: 'https://iili.io/2HwlRVf.md.webp',
		srcXL: 'https://iili.io/2HwlRVf.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2Hwlal2.md.webp',
		// srcM: 'https://iili.io/2Hwlal2.webp',
		srcS: 'https://iili.io/2zMi6CJ.md.webp',
		srcM: 'https://iili.io/2zMi6CJ.webp',
		position: 'Ma&shy;jor',
		firstname: 'Robin',
		lastname: 'Heisterkamp',
	},
	{
		filename: 'IMG 20241009 WA0140.webp',
		srcL: 'https://iili.io/2Hw0357.md.webp',
		srcXL: 'https://iili.io/2Hw0357.webp',
		width: 3024,
		height: 4032,
		// srcS: 'https://iili.io/2Hw02JS.md.webp',
		// srcM: 'https://iili.io/2Hw02JS.webp',
		srcS: 'https://iili.io/2zMi8p1.md.webp',
		srcM: 'https://iili.io/2zMi8p1.webp',
		position: 'Haupt&shy;mann',
		firstname: 'Jonas',
		lastname: 'Poth',
	},
	{
		filename: 'IMG 20241009 WA0130.webp',
		srcL: 'https://iili.io/2Hwlriv.md.webp',
		srcXL: 'https://iili.io/2Hwlriv.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2HwlZOX.md.webp',
		// srcM: 'https://iili.io/2HwlZOX.webp',
		srcS: 'https://iili.io/2zMiwEx.md.webp',
		srcM: 'https://iili.io/2zMiwEx.webp',
		position: 'Fähn&shy;rich',
		firstname: 'David',
		lastname: 'Mölders',
	},
	{
		filename: 'WhatsApp Image 2024 10 08 at 22.18.24 485541f9.webp',
		srcL: 'https://iili.io/2HwlGDu.md.webp',
		srcXL: 'https://iili.io/2HwlGDu.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2HwlkR1.md.webp',
		// srcM: 'https://iili.io/2HwlkR1.webp',
		srcS: 'https://iili.io/2zMie2V.md.webp',
		srcM: 'https://iili.io/2zMie2V.webp',
		position: '1. Fahnen&shy;offi&shy;zier',
		firstname: 'Lukas',
		lastname: 'Gustedt',
	},
	{
		filename: 'IMG 20241009 WA0138.webp',
		srcL: 'https://iili.io/2Hw0Jg2.md.webp',
		srcXL: 'https://iili.io/2Hw0Jg2.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2Hwlpsf.md.webp',
		// srcM: 'https://iili.io/2Hwlpsf.webp',
		srcS: 'https://iili.io/2zMiNrQ.md.webp',
		srcM: 'https://iili.io/2zMiNrQ.webp',
		position: '2. Fahnen&shy;offi&shy;zier',
		firstname: 'Finn',
		lastname: 'Hölter',
	},
	{
		filename: 'IMG 20241009 WA0100.webp',
		srcL: 'https://iili.io/2HwlNUB.md.webp',
		srcXL: 'https://iili.io/2HwlNUB.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2HwlvOF.md.webp',
		// srcM: 'https://iili.io/2HwlvOF.webp',
		srcS: 'https://iili.io/2zMikYB.md.webp',
		srcM: 'https://iili.io/2zMikYB.webp',
		position: 'Feld&shy;webel',
		firstname: 'Hendrik',
		lastname: 'Welling',
	},
	{
		filename: 'IMG 20241009 WA0171.webp',
		srcL: 'https://iili.io/2HwlTts.md.webp',
		srcXL: 'https://iili.io/2HwlTts.webp',
		width: 3840,
		height: 5120,
		srcS: 'https://iili.io/2zMtSse.md.webp',
		srcM: 'https://iili.io/2zMtSse.webp',
		position: 'Ad&shy;ju&shy;tant vom O&shy;berst',
		firstname: 'Joshua',
		lastname: 'Hidding',
	},
	{
		filename: 'IMG 20241009 WA0143.webp',
		srcL: 'https://iili.io/2Hw0Fe9.md.webp',
		srcXL: 'https://iili.io/2Hw0Fe9.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2HwlYKl.md.webp',
		// srcM: 'https://iili.io/2HwlYKl.webp',
		srcS: 'https://iili.io/2zMivkP.md.webp',
		srcM: 'https://iili.io/2zMivkP.webp',
		position: 'Ad&shy;ju&shy;tant vom Ma&shy;jor',
		firstname: 'Janis',
		lastname: 'Wiltink',
	},
	{
		filename: 'IMG 20241009 WA0171.webp',
		srcL: 'https://iili.io/2HwlTts.md.webp',
		srcXL: 'https://iili.io/2HwlTts.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2HwlVob.md.webp',
		// srcM: 'https://iili.io/2HwlVob.webp',
		srcS: 'https://iili.io/2zMirQa.md.webp',
		srcM: 'https://iili.io/2zMirQa.webp',
		position: 'Ad&shy;jut&shy;ant vom Haupt&shy;mann',
		firstname: 'Mirko',
		lastname: 'Renzel',
	},
	{
		filename: 'IMG 20241009 WA0152.webp',
		srcL: 'https://iili.io/2HwlAoG.md.webp',
		srcXL: 'https://iili.io/2HwlAoG.webp',
		width: 3840,
		height: 5120,
		// srcS: 'https://iili.io/2HwlcSS.md.webp',
		// srcM: 'https://iili.io/2HwlcSS.webp',
		srcS: 'https://iili.io/2zMiPEv.md.webp',
		srcM: 'https://iili.io/2zMiPEv.webp',
		position: 'Kut&shy;scher',
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
