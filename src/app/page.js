'use client'

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './globals.css';

export default function Home() {
  const [cookieStored, setCookieStored] = useState(false);

  const handleSetCookie = () => {
    Cookies.set('theme', 'dark');
    setCookieStored(true);
    console.log('Cookie set: theme=dark');
  };

  return (
    <section>
      <h1>Home Page</h1>
      <button onClick={handleSetCookie} className='set_cookie_btn'>Set Theme Cookie</button>
      {cookieStored && <p className='success_message'>Cookie is stored successfully!</p>}
    </section>
  );
}
