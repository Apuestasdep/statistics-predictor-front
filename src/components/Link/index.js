import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkComponent = ({ route, name }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={`/${route}`}
        className={`${
          pathname.includes(route) ? 'text-primary' : 'link-secondary'
        } link-offset-2 link-underline-opacity-0 `}
      >
        {name}
      </Link>
    </div>
  );
};

export default LinkComponent;
