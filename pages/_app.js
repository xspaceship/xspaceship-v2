import 'windi.css';
import 'styles/global.css';
import Script from 'next/script';
import { AnimatePresence } from 'framer-motion';

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
