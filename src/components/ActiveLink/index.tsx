import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: any;
  activeClassName: string;
}

export const ActiveLink = ({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest} className={className}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
};
