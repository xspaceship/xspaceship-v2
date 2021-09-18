import { useState, useCallback } from 'react';
import Link from 'components/Link';
import Image from 'next/image';
import NavPopover from 'components/NavPopover';
import meta from 'meta.json';

const Header = () => {
  const [navPopover, setNavPopover] = useState(false);

  const openNavPopover = useCallback(() => setNavPopover(true), []);
  const closeNavPopover = useCallback(() => setNavPopover(false), []);

  return (
    <header container="2xl:~" m="2xl:x-auto" p="5 lg:t-6 lg:x-32.5 lg:b-5">
      <div
        h="12.5 lg:14"
        flex="~"
        justify="between"
        align="items-center"
        font="jetbrain">
        <Link href="/">
          <a className="text-fs02 uppercase lg:text-fs01">{meta.shortName}</a>
        </Link>
        <nav display="hidden lg:block" className="text-tc01">
          {meta.nav.map(({ name, path }, index) => (
            <Link href={path} key={index}>
              <a p="6">{name}</a>
            </Link>
          ))}
        </nav>
        <button
          display="flex lg:hidden"
          border="~ rounded-full white"
          w="12.5"
          h="12.5"
          justify="center"
          align="items-center"
          onClick={openNavPopover}>
          <Image
            src="/images/hamburger.png"
            width="20"
            height="20"
            alt="hamburger"
          />
        </button>
      </div>

      <NavPopover isOpen={navPopover} close={closeNavPopover} />
    </header>
  );
};

export default Header;
