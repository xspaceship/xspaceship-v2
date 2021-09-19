import 'windi.css';
import 'styles/global.css';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps, router }) => (
  <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
    <Component {...pageProps} key={router.route} />
  </AnimatePresence>
);

export default App;
