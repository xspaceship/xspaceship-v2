import { AnimatePresence } from 'framer-motion';
import Script from 'next/script';
import 'styles/global.css';
import 'windi.css';

const App = ({ Component, pageProps, router }) => (
  <>
    <Script
      strategy="worker"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <script
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
      }}
    />
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  </>
);

export default App;
