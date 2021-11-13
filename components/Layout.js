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
			<div display="2xl:flex" m="2xl:x-auto" grid="2xl:gap-10">
				<Header />
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ type: 'easeInOut', duration: 0.5 }}
					className="2xl:max-w-1420px"
				>
					<div {...rest}>{children}</div>
					<Footer />
				</motion.main>
			</div>
		</>
	);
};

export default Layout;
