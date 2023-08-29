'use client'

import React, { useState } from 'react';
import Cookies from 'js-cookie';

export default function CookiePage() {
  const [cookieData, setCookieData] = useState(Cookies.get() || {});

  return (
    <section className='container'>
      <h1>Cookies Page</h1>
      {Object.keys(cookieData).length > 0 ? (
        <div className='cookie_info'>
          <h2>Cookie Found:</h2>
          <ul className='cookie_list'>
            {Object.entries(cookieData).map(([name, value]) => (
              <li key={name}>
                <strong>Name:</strong> {name}, <strong>Value:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No cookie found</p>
      )}
    </section>
  );
}
