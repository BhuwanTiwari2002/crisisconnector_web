"use client"
import React from 'react'
import '../../styles/hotline.css';
const HotlineSearch = async () => {
  return (
   <div>
      <form>
        <div className="form-group mt-3">
          <input
            style={{ width: '95%', margin: 'auto', color: 'black', opacity: '90%' }}
            type="text"
            id="search"
            className="form-control"
            placeholder="🔍 Search Hotline"
          />
        </div>
      </form>
    </div>
  );
};

export default HotlineSearch