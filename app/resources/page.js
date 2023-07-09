import React from 'react'
import '../../styles/hotline.css';
import '../../styles/resource.css'
const getHotlineData = async (url) => {
  try {
      const response = await fetch('http://localhost:3000/api/' + url);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error);
  }
}

const HotlineSearch = async () => {
  let data = await getHotlineData('resource');
  return (
      <body className='container' id="ResourcesMainContainer">
        <h1>Resource</h1>
        {
          data.map(({category, types}) => {
              return (
                <div>
                  <div>
                    <h2 className='category-title'>{category}</h2>
                  </div>
                  <div className='resource-grid'>
                        {types.map(({title, description, image_path}) => {
                          return (
                            <div className='resource-item'>
                              <img src={image_path} alt={title} />
                              <div className='resource-info'>
                                <h2 className='resource-title'>{title}</h2>
                                <p className='resource-desc'>{description}</p>
                                <a className='resource-link'>More Info</a>
                              </div>
                            </div>
                          );
                        })}
                  </div>
                </div>
              );
          })
        }
      </body>
  );
};

export default HotlineSearch