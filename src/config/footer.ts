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
		title: 'Landing Pages',
		items: [
			{
				title: 'Landing Page 1',
				slug: '/landing-pages/landing-1',
			},
			{
				title: 'Landing Page 2',
				slug: '/landing-pages/landing-2',
			},
		],
	},
	{
		title: 'Company',
		items: [
			{
				title: 'About',
				slug: '/about',
			},
			{
				title: 'News',
				slug: '/news',
			},
			{
				title: 'Vorstand',
				slug: '/vorstand',
			},
			{
				title: 'Fotos',
				slug: '/fotos',
			},
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
	{
		title: 'Theme',
		items: [
			{
				title: 'Get Started',
				slug: '/theme/get-started',
			},
			{
				title: 'Style Guide',
				slug: '/theme/style-guide',
			},
			{
				title: 'Theme Setup',
				slug: '/theme/theme-setup',
			},
			{
				title: 'Customizing Odyssey',
				slug: '/theme/customizing-odyssey',
			},
		],
	},
] as const;
