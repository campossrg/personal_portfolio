import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link onClick={() => {
              document.querySelector('#Services').scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>Services</Link>
        </li>
        <li>
          <Link onClick={() => {
              document.querySelector('#Projects').scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>Projects</Link>
        </li>
        <li>
          <Link onClick={() => {
              document.querySelector('#Techstack').scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>Tech stack</Link>
        </li>
        <li>
          <Link onClick={() => {
              document.querySelector('#Contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;