'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const themeButtonText = isDarkTheme ? "Light" : "Dark";

  return (
    <header className={`header ${isDarkTheme ? 'dark' : 'light'}`}>
      <nav className="nav">
        <Link href="/">
          <Image
            src="/ashley_Logo.png"
            alt="Logo"
            className="logo"
            width={80}
            height={60}
          />
        </Link>
        <button
          className={`mobileMenuButton ${
            isMobileMenuOpen ? 'open' : ''
          }`}
          onClick={toggleMobileMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul
          className={`navLinks ${
            isMobileMenuOpen ? 'open' : ''
          }`}
        >
          <li>
            <Link href="/" className="menu_link">Home</Link>
          </li>
          <li>
            <Link href="/blog" className="menu_link">Blog</Link>
          </li>
          <li>
            <Link href="/about" className="menu_link">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="menu_link">Contact</Link>
          </li>
        </ul>
        <button onClick={toggleTheme} className="themeToggleBtn">
          {themeButtonText}
        </button>
      </nav>
    </header>
  );
};

export default Header;
