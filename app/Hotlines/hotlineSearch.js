'use client'
import React, { useState } from 'react';
import '../../styles/hotline.css';
const HotlineSearch = () => {
    const [searchText, setSearchText] = useState('');
  
    const handleInputChange = (event) => {
      setSearchText(event.target.value);
    };
  
    return (
      <div>
        <div className="form-group mt-3">
          <input
            style={{ width: '95%', margin: 'auto', color: 'black', opacity: '90%' }}
            type="text"
            id="search"
            className="form-control"
            placeholder="🔍 Search Hotline"
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-3">
          You entered: {searchText}
        </div>
      </div>
    );
  };
  
  export default HotlineSearch;
  