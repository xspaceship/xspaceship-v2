import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import Link from 'components/Link';
import meta from 'contents/pages.json';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { currentYear, delay } from 'utils/time';

const SCROLL_LOCK_OPTION = { reserveScrollBarGap: true };

const NAV_VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.3 },
  },
};

const OVERLAY_VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ITEM_VARIANTS = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const SIDE_VARIANTS = {
  closed: {
    transition: { staggerChildren: 0.2, staggerDirection: -1 },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
      delayChildren: 0.1,
    },
  },
};

const Nav = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleVisibleNav = useCallback(() => {
    if (!window) return;

    setVisibleNav(v => !v);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const fn = window.pageYOffset > 100 ? 'remove' : 'add';
      buttonRef.current.classList[fn]('lg:hidden');
    };

    window.addEventListener('scroll', handleScroll);
    setIsDesktop(window.innerWidth > 1024);

    return () => {
      if (navRef.current) clearAllBodyScrollLocks(navRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    delay(10).then(() => {
      if (!navRef.current) return;
      const fn = visibleNav ? disableBodyScroll : enableBodyScroll;
      const storedRequestAnimationFrame = window.requestAnimationFrame;

      if (visibleNav) window.requestAnimationFrame = () => 42;

      fn(navRef.current, SCROLL_LOCK_OPTION);
      window.requestAnimationFrame = storedRequestAnimationFrame;
    });
  }, [visibleNav]);

  return (
    <>
      <div
        ref={buttonRef}
        className="lg:hidden"
        display="flex"
        border="~ rounded-full white"
        pos="fixed top-5 right-5 lg:right-10 lg:top-8"
        w="12.5"
        h="12.5"
        justify="center"
        align="items-center"
        z="20"
        bg="black"
        cursor="pointer"
        onClick={toggleVisibleNav}
      >
        <div w="5" flex="~">
          {visibleNav ? (
            <Image src="/images/close.png" width="80" height="80" alt="Close" />
          ) : isDesktop ? (
            <Image
              src="/images/hamburger-2.png"
              width="80"
              height="80"
              alt="Hamburger"
            />
          ) : (
            <Image
              src="/images/hamburger.png"
              width="80"
              height="80"
              alt="Hamburger"
            />
          )}
        </div>
      </div>

      <AnimatePresence>
        {visibleNav && (
          <motion.div
            ref={navRef}
            className="fixed top-0 right-0 w-screen h-screen bg-bg10 flex justify-end z-10"
            onClick={toggleVisibleNav}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={OVERLAY_VARIANTS}
            transition={{ type: 'easeInOut', duration: 0.5 }}
          >
            <motion.aside
              initial="initial"
              animate="animate"
              exit="exit"
              variants={NAV_VARIANTS}
              className="bg-bg07 w-full p-5 lg:w-104 lg:py-8 lg:px-10"
            >
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={SIDE_VARIANTS}
              >
                <motion.div variants={ITEM_VARIANTS}>
                  <div
                    h="12.5 lg:14"
                    flex="~"
                    justify="start"
                    align="items-center"
                    m="b-10 lg:t-16"
                    text="fs02"
                  >
                    <Link href="/">
                      <a className="flex">
                        <div w="10 2xl:15" flex="~">
                          <Image
                            src="/images/union.png"
                            width={80}
                            height={80}
                            alt="Union"
                          />
                        </div>
                        <span className="ml-4 font-redhat font-bold">
                          {meta.shortName}
                        </span>
                      </a>
                    </Link>
                  </div>
                </motion.div>

                {meta.nav.map(({ name, path }, index) => (
                  <motion.div key={index} variants={ITEM_VARIANTS}>
                    <Link href={path}>
                      <a
                        display="block"
                        p="y-5"
                        font="redhat leading-lh01"
                        transition="colors duration-300"
                        className="text-fs01 hover:text-tc06"
                        border="t-1 last:b-1 bc01"
                      >
                        {name}
                      </a>
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={ITEM_VARIANTS}>
                  <h5 font="leading-4" m="t-10" text="xs">
                    © {currentYear} {meta.shortName}
                  </h5>
                </motion.div>
              </motion.nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
