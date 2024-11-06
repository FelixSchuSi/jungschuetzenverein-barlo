// 1. Bilder in webp umwandeln mit zwei unterschiedlichen Qualitäten
// ein mal mit qualität = 75 für große Bilder
// ein mal mit qualität = 10 für kleine Bilder

// 2. auf freeimagehost ein Album erstellen und die kleinen und großen Versionen der Bilder in separaten Alben hochladen

// 3. Auf die Seite beider Alben gehen und so lange scrollen bis alle Bilder im DOM sind

// 4. In den Devtools folgendes javascript ausführen

JSON.stringify(
	[
		...document.querySelectorAll('.list-item-image.fixed-size img.jsly-loaded'),
	].map(e => {
		return {
			name: e.alt,
			srcS: e.src,
			srcM: e.src.replace('.md.', '.'),
			// Nur eines von beidem
			srcL: e.src,
			srcXL: e.src.replace('.md.', '.'),
			width: e.getAttribute('width'),
			height: e.getAttribute('height'),
		};
	}),
);

// Die Ergebnisse aus den beiden Alben müssen noch zusammengeführt werden:
let biggerFiles = [
	...document.querySelectorAll('.list-item-image.fixed-size img.jsly-loaded'),
].map(e => {
	return {
		name: e.alt,
		srcL: e.src,
		srcXL: e.src.replace('.md.', '.'),
		width: Number(e.getAttribute('width')),
		height: Number(e.getAttribute('height')),
	};
});

let smallerFiles = JSON.parse('Aus dem anderen Album kopiert');
output = new Map();
biggerFiles.forEach(e => {
	output.set(e.name, e);
});
smallerFiles.forEach(e => {
	if (output.has(e.name)) {
		output.get(e.name).srcS = e.srcS;
		output.get(e.name).srcM = e.srcM;
	}
});

const out = [...output.values()].toSorted((a, b) =>
	a.name.localeCompare(b.name),
); // Dieses Array in eine eigene Datei kopieren
