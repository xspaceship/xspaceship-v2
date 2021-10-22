import Link from 'components/Link';
import Nav from 'components/Nav';
import meta from 'meta.json';

const Header = () => {
	return (
		<header p="5 lg:t-6 lg:x-32.5 lg:b-5 2xl:x-8 2xl:y-0">
			<div
				h="12.5 lg:14"
				flex="~ 2xl:col"
				justify="between 2xl:start"
				align="items-center 2xl:items-start 2xl:self-start"
				font="jetbrain"
				space="2xl:y-5"
				pos="2xl:sticky 2xl:top-8"
			>
				<Link href="/">
					<a className="text-fs02 lg:text-fs01">{meta.shortName}</a>
				</Link>
				<nav
					display="hidden lg:block"
					flex="2xl:~ 2xl:col"
					align="2xl:self-start"
					className="text-tc01"
				>
					{meta.nav.map(({ name, path }, index) => (
						<Link href={path} key={index}>
							<a p="6 2xl:y-3 2xl:x-0">{name}</a>
						</Link>
					))}
				</nav>
			</div>

			<Nav />
		</header>
	);
};

export default Header;
