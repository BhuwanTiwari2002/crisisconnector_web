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

const HotlineSearch = async () => {
    let data = await getHotlineData('hotline');
    let test = "";
    data.forEach(({title, types}) => {
      test = title;
      console.log(title);
      console.log(types);
      types.forEach(({ name, link }) => {
        console.log(name);
      });   
    });

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
      <h1 style={{ margin: '20px' , textAlign: 'center', fontSize: '35px'}}>
        Hotline List
      </h1>
      {
        data.map(({title, types}) => {
          return (
            <div className="hotlineTitle" > 
              <h2>{title}</h2>
              {types.map(({name, link}) => {
                return (
                  <div className="hotlineName">
                    <a href={link}>{name}</a>
                  </div>
                );
              })}
            </div>
          );
        })
      }
    </form>
  );
};

export default HotlineSearch