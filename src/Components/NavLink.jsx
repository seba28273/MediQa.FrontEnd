import React from 'react';
import { Link } from 'react-router-dom';
//import Link from 'next/link';
const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

  export default NavLink;