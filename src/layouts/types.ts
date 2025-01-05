export type VorstandsPosition =
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
