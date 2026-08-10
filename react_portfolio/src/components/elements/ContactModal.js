import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Image from './Image';

const links = [
  {
    label: 'campos.srg@gmail.com',
    href: 'mailto:campos.srg@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Email</title>
        <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2.5 6.5l9.5 7 9.5-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/campossrg/',
    icon: <Image src={require('./../../assets/images/icons/icon_11_linkedin.png').default} alt="LinkedIn" width={16} height={16} />
  },
  {
    label: 'GitHub',
    href: 'https://github.com/campossrg',
    icon: <Image src={require('./../../assets/images/icons/icon_10_github.png').default} alt="Github" width={16} height={16} />
  },
  {
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/3399033/sergio-campos',
    icon: <Image src={require('./../../assets/images/icons/icon_12_stackoverflow.png').default} alt="Stackoverflow" width={16} height={16} />
  }
];

const ContactModal = ({ isActive, onClose }) => {

  const inner = useRef(null);

  useEffect(() => {
    const keyPress = (e) => {
      isActive && e.keyCode === 27 && onClose();
    }
    const clickOutside = (e) => {
      if (!isActive || !inner.current) return;
      if (!inner.current.contains(e.target)) onClose();
    }
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
    }
  }, [isActive, onClose]);

  return (
    <div className={classNames('modal', isActive && 'is-active')}>
      <div className="modal-inner" ref={inner}>
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            <span className="screen-reader">Close</span>
          </button>
          <p className="text-xxs text-color-secondary fw-600 tt-u mb-8">Get in touch</p>
          <h3 className="mt-0 mb-8">Let's talk</h3>
          <p className="text-sm text-color-mid mb-24">
            Reach out directly through any of the channels below — I usually reply within a day or two.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(115, 239, 204, 0.24)',
                  background: 'rgba(36, 229, 175, 0.06)',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                <span style={{ display: 'inline-flex', color: '#73EFCC' }}>{link.icon}</span>
                <span className="text-sm fw-600">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
