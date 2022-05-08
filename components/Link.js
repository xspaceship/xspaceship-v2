import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement } from 'react';

const Link = ({ children, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const isActive = [props.href, props.as].includes(asPath);

  return (
    <NextLink {...props} scroll={false}>
      {cloneElement(child, {
        className: `${childClassName} ${isActive ? 'text-white' : ''}`,
      })}
    </NextLink>
  );
};

export default Link;
