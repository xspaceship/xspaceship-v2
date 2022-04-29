import { AnimatePresence } from 'framer-motion';
import Script from 'next/script';
import 'styles/global.css';
import 'windi.css';

const App = ({ Component, pageProps, router }) => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <Script id="ga-analytics">
      {`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
			`}
    </Script>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  </>
);

export default App;
