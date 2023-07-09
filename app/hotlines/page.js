import React from 'react'
import '../../styles/hotline.css';
import HotlineSearch from './hotlineSearch';
import getHotlineData from '../../helpers/endpoints'
const Hotlines = async () => {
  let data = await getHotlineData('hotline');
  return (
    <div>
      <HotlineSearch></HotlineSearch>
      <h1 style={{ margin: '20px', textAlign: 'center', fontSize: '35px' }}>
        Hotline List
      </h1>
      {
        data.map(({ title, types }) => {
          return (
            <div className="hotlineTitle" >
              <h2>{title}</h2>
              {types.map(({ name, link }) => {
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
    </div>
  );
};

export default Hotlines