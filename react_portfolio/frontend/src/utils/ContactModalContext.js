import React, { createContext, useContext, useState } from 'react';
import ContactModal from '../components/elements/ContactModal';

const ContactModalContext = createContext({
  openContact: () => {}
});

export const useContactModal = () => useContext(ContactModalContext);

export const ContactModalProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const openContact = (e) => {
    e && e.preventDefault && e.preventDefault();
    setIsOpen(true);
  }

  const closeContact = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openContact }}>
      {children}
      <ContactModal isActive={isOpen} onClose={closeContact} />
    </ContactModalContext.Provider>
  );
}

export default ContactModalContext;
