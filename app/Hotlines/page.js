import React from 'react'
import '../../styles/hotline.css';

const getHotlineData = async (url) => {
  try {
      const response = await fetch('http://localhost:3000/api/' + url);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error);
  }
}


const fetchData = async () => {
  let data = await getHotlineData('hotline');
  // Assuming that data is an array
  if (Array.isArray(data)) {
    data.forEach(item => {
      item = data;
    });
  } else {
    console.log("Data is not an array");
  }
}
fetchData();

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
      

    <div id="hotlineList" className="form-group">
        <div className="hotlineTitle">
          <h2>Hello</h2>
          <div className="hotlineName">
            <a>Test</a>
            <a>Test</a>
            <a>Test</a>
            <a>Test</a>
          </div>
        </div>
        <div className="hotlineTitle">
          <h2>Hello</h2>
          <div className="hotlineName">
            <a>Test</a>
            <a>Test</a>
            <a>Test</a>
            <a>Test</a>
          </div>
        </div>
      </div>


    </form>
  );
};

export default HotlineSearch