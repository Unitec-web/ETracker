import React, { useState } from 'react';
import './topnavbar.css'; // Import the CSS file for styling
import Searc from './Assets/search.png'; //

const TopNavbar = () => {
  const [selected, setSelected] = useState(null); // State for tracking selected menu item

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <nav className="navbar">
      <div className="navbar-upper">
        <div className="app-title">
          {/* Your app title */}
          <h1>Unity Money Manager</h1>
        </div>
        <div className="navbar-lower">
          <ul>
            <li 
              className={selected === 0 ? 'active' : ''}
              onClick={() => handleSelect(0)}
            >
              <a href="#">Expenditures</a>
            </li>
            <li 
              className={selected === 1 ? 'active' : ''}
              onClick={() => handleSelect(1)}
            >
              <a href="#">Total</a>
            </li>
            <li 
              className={selected === 2 ? 'active' : ''}
              onClick={() => handleSelect(2)}
            >
              <a href="#">Notes</a>
            </li>
          </ul>
        </div>
        <div className="language-search">
          {/* Language selector with an icon */}
          <div className="language-container">
            <select className="language-selector">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
          
          {/* Search bar with an icon */}
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search" />
            <button className="search-button">
              <img src={Searc} alt="Search Icon" className="search-icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
