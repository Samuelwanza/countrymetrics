import React from 'react';
import './Header.css';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { BiSolidMicrophone } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="Nav">
      <div className="navpartone">
        <Link className="link" to="/">
          <IoIosArrowBack className="icon-bold" />
          <p>2023</p>
        </Link>
      </div>
      <h3>most populated</h3>
      <div className="navparttwo">
        <BiSolidMicrophone className="icon-bold" />
        <IoIosSettings className="icon-bold" />
      </div>
    </nav>
  );
}
