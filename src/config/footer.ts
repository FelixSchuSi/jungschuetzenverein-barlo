export const footerSocials = [
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/jungschuetzenvereinbarlo_ev_/',
		icon: 'mdi:instagram',
	},
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/JungschuetzenvereinBarlo',
		icon: 'mdi:facebook',
	},
	{
		name: 'Github',
		url: 'https://github.com/FelixSchuSi/jungschuetzenverein-barlo',
		icon: 'mdi:github',
	},
] as const;

export const footerLists = [
	{
		title: 'Der Verein',
		items: [
			{
				title: 'Termine',
				slug: '/termine',
			},
			{
				title: 'Fotos',
				slug: '/fotos',
			},
			{
				title: 'Vorstand',
				slug: '/vorstand',
			},
		],
	},
	{
		title: 'Historie',
		items: [
			{
				title: 'Entstehungsgeschichte',
				slug: '/historie/entstehungsgeschichte',
			},
			{
				title: 'Vereinsführer, Oberst und Schriftführer ab 1950',
				slug: '/historie/vereinsfuehrer-oberst-schriftfuehrer-ab-1950',
			},
			{
				title: 'Das Schützenfest des Jungschützen-Vorstands',
				slug: '/historie/das-schuetzenfest-des-jungschuetzen-vorstands',
			},
		],
	},
	{
		title: 'Rechtliches',
		items: [
			{
				title: 'Impressum',
				slug: '/impressum',
			},
			{
				title: 'Datenschutz',
				slug: '/datenschutz',
			},
		],
	},
] as const;
