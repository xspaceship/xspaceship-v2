import 'windi.css';
import 'styles/global.css';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps }) => (
  <AnimatePresence exitBeforeEnter onExitComplete={() => console.log(1231)}>
    <Component {...pageProps} />
  </AnimatePresence>
);

export default App;
