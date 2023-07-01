import React from 'react'
import renderHotlineListPage from'../../modules/hotlines';
const HotlineSearch = () => {
  return (
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
      <h1 id="rainbow-heading-text" style={{ textAlign: 'center' }}>
        Hotline List
      </h1>
      <renderHotlineListPage />
    </form>
  );
};

export default HotlineSearch