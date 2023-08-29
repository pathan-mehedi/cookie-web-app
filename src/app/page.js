'use client'

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './globals.css';
import Link from 'next/link';

export default function Home() {
  const [cookieStored, setCookieStored] = useState(false);

  const handleSetCookie = () => {
    Cookies.set('theme', 'dark');
    setCookieStored(true);
    console.log('Cookie set: theme=dark');
  };

  return (
    <section className='section'>
      <h1>Home Page</h1>
      <button onClick={handleSetCookie} className='set_cookie_btn'>Set Theme Cookie</button>
      {cookieStored && <p className='success_message'>Cookie is stored successfully!</p>}

      <div className='sub_section_wrapper'>
        <p className='sub_section_title'>for the json respons visit this link</p>
        <Link href={'api/hello'} className='learn_more_btn'>See Data</Link>
      </div>
    </section>
  );
}
