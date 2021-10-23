import 'windi.css';
import 'styles/global.css';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps, router }) => (
	<AnimatePresence exitBeforeEnter>
		<Component {...pageProps} key={router.route} />
	</AnimatePresence>
);

export default App;
