import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Layout = props => {
	const { children, title = '', desc = '', ...rest } = props;

	return (
		<>
			<Head>
				{title && <title>{title}</title>}
				{desc && <meta name="description" content={desc} />}
			</Head>
			<div display="2xl:flex" container="2xl:~" m="2xl:x-auto">
				<Header />
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ type: 'easeInOut', duration: 0.5 }}
				>
					<div {...rest}>{children}</div>
				</motion.main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
