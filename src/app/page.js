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
    <main className="container">
      <h1>Home Page</h1>
      <button onClick={handleSetCookie}>Set Theme Cookie</button>
      {cookieStored && <p>Cookie is stored successfully!</p>}
    </main>
  );
}
