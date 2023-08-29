'use client'

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookiePage = () => {
  const [cookiesList, setCookiesList] = useState([]);

  useEffect(() => {
    const cookies = Cookies.get();
    const cookiesArray = Object.entries(cookies);
    setCookiesList(cookiesArray);
  }, []);

  return (
    <div className='container'>
      <h1>Cookie Page</h1>
      <ul>
        {cookiesList.map(([name, value]) => (
          <li key={name}>
            <strong>Name:</strong> {name}, <strong>Value:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CookiePage;
