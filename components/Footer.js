import { currentYear } from 'utils/time';
import meta from 'meta.json';

const Footer = () => (
	<footer
		container="2xl:~"
		m="2xl:x-auto"
		p="5 lg:y-24 lg:x-32"
		font="worksans"
		grid="lg:~ lg:cols-12 lg:gap-5"
	>
		<div grid="lg:col-span-10 lg:col-start-2">
			<h3 display="lg:hidden" m="y-10" className="text-3xl">
				{meta.shortName}
			</h3>
			<a
				href={`mailto:${meta.email}`}
				display="block"
				font="leading-9"
				className="text-gradient-01 text-xl md:text-3xl"
			>
				{meta.email}
			</a>
			<hr m="t-5 lg:t-10 b-5" />
			<div flex="~" justify="between">
				<h3 className="text-xs">
					© {currentYear} {meta.shortName}
				</h3>
				<a href="/sitemap.xml" className="text-xs">
					Site map
				</a>
			</div>
		</div>
	</footer>
);

export default Footer;
