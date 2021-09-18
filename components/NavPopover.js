import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'components/Link';
import Image from 'next/image';
import { currentYear } from 'utils/time';
import meta from 'meta.json';

const NavPopover = ({ isOpen, close }) => {
  const [body, setBody] = useState(null);

  useEffect(() => {
    if (document) setBody(document.body);
  }, []);

  if (!isOpen || !body) return null;

  return createPortal(
    <div pos="absolute top-0 left-0" w="full" h="full" p="5" bg="bg07">
      <div
        h="12.5 lg:14"
        flex="~"
        justify="between"
        align="items-center"
        font="jetbrain"
        m="b-10">
        <Link href="/">
          <a className="text-fs02 uppercase">{meta.shortName}</a>
        </Link>
        <button
          display="flex lg:hidden"
          border="~ rounded-full white"
          w="12.5"
          h="12.5"
          justify="center"
          align="items-center"
          onClick={close}>
          <Image src="/images/close.png" width="20" height="20" alt="close" />
        </button>
      </div>
      <nav m="b-10">
        {meta.nav.map(({ name, path }, index) => (
          <Link href={path} key={index}>
            <a
              display="block"
              p="y-6"
              font="questrial lh01"
              className="text-fs01"
              border="t-1 last:b-1 bc01">
              {name}
            </a>
          </Link>
        ))}
      </nav>
      <h3 font="jetbrain leading-4" className="text-xs">
        © {currentYear} {meta.shortName}
      </h3>
    </div>,
    body,
  );
};

export default NavPopover;
