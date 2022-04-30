import content from 'contents/footer.json';
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
      <div
        flex="~ col lg:row"
        justify="between"
        align="items-start lg:items-end"
      >
        <div>
          <Image src="/images/union.png" width={60} height={60} alt="Union" />
          <a
            href={`mailto:${meta.email}`}
            display="block"
            font="leading-9"
            p="y-5 lg:y-0"
            m="lg:t-5"
            className="text-2xl md:text-3xl"
          >
            {meta.email}
          </a>
        </div>
        <div space="x-6">
          {content.social.map(({ name, image, path }, index) => (
            <a key={index} target="_blank" href={path} rel="noreferrer">
              <Image
                src={`/images/${image}.png`}
                width={24}
                height={24}
                alt={name}
              />
            </a>
          ))}
        </div>
      </div>
      <hr m="t-5 lg:t-10 b-5" />
      <div flex="~" justify="between">
        <h3 className="text-xs">
          © {currentYear} {meta.shortName}
        </h3>
        <a href="/sitemap.xml" className="text-xs">
          Site map
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
