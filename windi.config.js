import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	extract: {
		include: ['**/*.{jsx,css,js}'],
		exclude: ['node_modules', '.git', '.next', 'out'],
	},
	attributify: true,
	purge: {
		content: ['./src/**/*.js'],
		options: {
			safelist: [
				/col-span-(1[0-2]|[0-9])/,
				/text-gradient-(1[0-2]|[0-9])/,
				'col-span-6',
			],
			keyframes: false,
		},
	},
	darkMode: false,
	theme: {
		extend: {
			backgroundColor: {
				bg01: '#040404',
				bg02: '#222222',
				bg03: '#1F2030',
				bg04: '#302B29',
				bg05: '#24301F',
				bg06: '#1A1A1A',
				bg07: '#141414',
				bg08: '#1F2030',
				bg09: '#282828',
			},
			fontSize: {
				fs01: '2.5rem',
				fs02: '1.75rem',
			},
			lineHeight: {
				lh01: '1.05rem',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				jetbrain: ['JetBrains Mono', 'monospace'],
				worksans: ['Work Sans', 'sans-serif'],
				ubermove: ['Uber Move', 'sans-serif'],
				questrial: ['Questrial', 'sans-serif'],
			},
			textColor: {
				tc01: 'rgba(255, 255, 255, 0.6)',
				tc02: '#8D8D8D',
				tc03: '#F4D9B9',
				tc04: '#F4F4F4',
				tc05: '#9D9D9D',
			},
			padding: {
				7.5: '1.875rem',
				15: '3.75rem',
				22: '5.5rem',
				22.5: '5.625rem',
				32.5: '8.125rem',
			},
			margin: {
				7.5: '1.875rem',
				15: '3.75rem',
				22: '5.5rem',
				22.5: '5.625rem',
				32.5: '8.125rem',
			},
			height: {
				12.5: '3.125rem',
			},
			width: {
				12.5: '3.125rem',
			},
			borderColor: {
				bc01: '#2D2D2D',
				bc02: '#4F4F4F',
				bc03: 'rgba(255, 255, 255, 0.2)',
			},
		},
	},
});
