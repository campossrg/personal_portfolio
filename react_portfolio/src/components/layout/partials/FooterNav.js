import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useContactModal } from '../../../utils/ContactModalContext';

const FooterNav = ({
  className,
  ...props
}) => {

  const { openContact } = useContactModal();

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
              document.querySelector('#Techstack').scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>Tech stack</Link>
        </li>
        <li>
          <Link onClick={openContact}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;