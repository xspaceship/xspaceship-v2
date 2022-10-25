import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

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
          className="2xl:flex-1 2xl:flex 2xl:justify-center"
        >
          <div max-w="2xl:2000px">
            <div {...rest}>{children}</div>
            <Footer />
          </div>
        </motion.main>
      </div>
    </>
  );
};

export default Layout;
