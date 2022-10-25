import meta from 'contents/pages.json';
import Image from 'next/image';
import { currentYear } from 'utils/time';

const Footer = () => (
  <footer
    container="2xl:~"
    m="2xl:x-auto"
    p="5 lg:y-24 lg:x-32"
    grid="lg:~ lg:cols-12 lg:gap-5"
  >
    <div grid="lg:col-span-10 lg:col-start-2">
      <div m="t-10 lg:t-0 lg:b-5">
        <Image src="/images/union.png" width={60} height={60} alt="Union" />
      </div>
      <div flex="~ col lg:row" justify="between" align="lg:items-center">
        <a
          href={`mailto:${meta.email}`}
          display="block"
          font="leading-9 bold"
          p="y-5 lg:y-0"
          className="text-2xl md:text-3xl"
        >
          {meta.email}
        </a>
        <div space="x-6" flex="~">
          {meta.social.map(({ name, image, path }, index) => (
            <a
              key={index}
              target="_blank"
              href={path}
              rel="noreferrer"
              flex="inline"
              w="10 lg:6"
              h="10 lg:6"
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
      <hr m="t-5 lg:t-10 b-5" />
      <div flex="~" justify="between">
        <span className="text-xs">
          © {currentYear} {meta.shortName}
        </span>
        <a href="/sitemap.xml" className="text-xs">
          Site map
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
