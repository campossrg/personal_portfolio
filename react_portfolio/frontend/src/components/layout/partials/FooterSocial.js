import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sergio.campos.1804/">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path
                d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" />
            </svg>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/campossrg/">
            <Image
              src={require('./../../../assets/images/icons/icon_11_linkedin.png').default}
              alt="LinkedIn"
              width={16}
              height={16} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/3399033/sergio-campos">
            <Image
              src={require('./../../../assets/images/icons/icon_12_stackoverflow.png').default}
              alt="Stackoverflow"
              width={16}
              height={16} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/campossrg">
            <Image
              src={require('./../../../assets/images/icons/icon_10_github.png').default}
              alt="Github"
              width={16}
              height={16} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;