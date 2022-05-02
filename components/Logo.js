import meta from 'contents/pages.json';
import Image from 'next/image';

const Logo = () => (
  <>
    <div w="10 2xl:15" flex="~">
      <Image src="/images/union.png" width={80} height={84} alt="Union" />
    </div>
    <h1 m="l-5 2xl:l-0 2xl:t-3" font="redhat black">
      {meta.shortName}
    </h1>
  </>
);

export default Logo;
