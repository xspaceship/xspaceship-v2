import Link from 'components/Link';
import meta from 'contents/pages.json';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const Nav = dynamic(() => import('./Nav'));

const Header = () => {
  const [is2XL, setIs2XL] = useState(true);

  const wh = useMemo(() => (is2XL ? 60 : 40), [is2XL]);

  const handleResize = e => {
    setIs2XL(e.target.innerWidth >= 1800);
  };

  useEffect(() => {
    if (window && window.innerWidth < 1800) {
      setIs2XL(false);
    }

    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <header
      w="2xl:1/5"
      max-w="2xl:400px"
      p="5 lg:t-6 lg:x-32.5 lg:b-5 2xl:x-8 2xl:y-0"
    >
      <div
        h="12.5 lg:14"
        flex="~ 2xl:col"
        justify="between 2xl:start"
        align="items-center 2xl:items-start 2xl:self-start"
        space="2xl:y-10"
        pos="2xl:sticky 2xl:top-8"
      >
        <Link href="/">
          <a className="text-fs02 lg:text-fs01 flex items-center 2xl:flex-col 2xl:items-start">
            <Image src="/images/union.png" width={wh} height={wh} alt="Union" />
            <span m="l-5 2xl:l-0 2xl:t-3" font="redhat">
              {meta.shortName}
            </span>
          </a>
        </Link>
        <nav
          display="hidden lg:block"
          flex="2xl:~ 2xl:col"
          align="2xl:self-start"
          className="text-tc01"
        >
          {meta.nav.map(({ name, path }, index) => (
            <Link href={path} key={index}>
              <a
                p="x-6 2xl:y-3 2xl:x-0"
                transition="colors duration-300"
                className="hover:text-tc06"
              >
                {name}
              </a>
            </Link>
          ))}
        </nav>
      </div>

      {is2XL ? '' : <Nav />}
    </header>
  );
};

export default Header;
