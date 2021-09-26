import Link from 'components/Link';
import Nav from 'components/Nav';
import meta from 'meta.json';

const Header = () => {
  return (
    <header container="2xl:~" m="2xl:x-auto" p="5 lg:t-6 lg:x-32.5 lg:b-5">
      <div
        h="12.5 lg:14"
        flex="~"
        justify="between"
        align="items-center"
        font="jetbrain">
        <Link href="/">
          <a className="text-fs02 lg:text-fs01">{meta.shortName}</a>
        </Link>
        <nav display="hidden lg:block" className="text-tc01">
          {meta.nav.map(({ name, path }, index) => (
            <Link href={path} key={index}>
              <a p="6">{name}</a>
            </Link>
          ))}
        </nav>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
