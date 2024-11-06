export const footerSocials = [
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/jungschuetzenvereinbarlo_ev_/',
		icon: 'mdi:instagram',
	},
	{
		name: 'WhatsApp',
		url: 'https://chat.whatsapp.com/DZwS3bet8879YausotZUCV',
		icon: 'mdi:whatsapp',
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
		title: 'Aktuelles',
		items: [
			{
				title: 'Termine',
				slug: '/termine',
			},
			{
				title: 'Fotos',
				slug: '/fotos',
			},
		],
	},
	{
		title: 'Der Verein',
		items: [
			{
				title: 'Vorstand',
				slug: '/vorstand',
			},
			{
				title: 'Historie',
				slug: '/historie',
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
