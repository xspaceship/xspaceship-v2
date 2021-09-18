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
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{ type: 'linear', duration: 2 }}>
        <div {...rest}>{children}</div>
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
