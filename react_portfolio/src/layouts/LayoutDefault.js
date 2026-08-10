import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ContactModalProvider } from '../utils/ContactModalContext';

const LayoutDefault = ({ children }) => (
  <ContactModalProvider>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </ContactModalProvider>
);

export default LayoutDefault;  