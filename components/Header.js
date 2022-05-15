import Link from 'components/Link';
import content from 'contents/footer.json';
import meta from 'contents/pages.json';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const Nav = dynamic(() => import('./Nav'));

const Header = () => {
  const [is2XL, setIs2XL] = useState(true);

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
            <Logo />
          </a>
        </Link>
        <nav
          display="hidden lg:block"
          flex="2xl:~ 2xl:col"
          align="2xl:self-start"
          className="text-tc01"
          space="2xl:y-5"
        >
          {meta.nav.map(({ name, path }, index) => (
            <Link href={path} key={index}>
              <a
                p="x-6 2xl:x-0"
                transition="colors duration-300"
                className="2xl:text-2xl hover:text-tc06"
              >
                {name}
              </a>
            </Link>
          ))}
        </nav>
        <div display="hidden 2xl:block" space="y-5">
          <a
            href={`mailto:${meta.email}`}
            font="leading-5 medium"
            className="text-tc07"
          >
            {meta.email}
          </a>
          <div space="x-5" flex="~">
            {content.social.map(({ name, image, path }, index) => (
              <a
                key={index}
                target="_blank"
                href={path}
                rel="noreferrer"
                flex="inline"
                w="6"
                h="6"
              >
                <Image
                  src={`/images/${image}.png`}
                  width={40}
                  height={40}
                  alt={name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {is2XL ? '' : <Nav />}
    </header>
  );
};

export default Header;
