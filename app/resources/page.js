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

const HotlineSearch = async () => {
  let data = await getHotlineData('resource');
  return (
      <body>
        <h1>Resource</h1>
        {
          data.map(({category, types}) => {
            <h2 class='category-title'></h2>
              return (
                <div class="container" id="ResourcesMainContainer">
                      <h2>{category}</h2>
                      {types.map(({title, description, image_path}) => {
                        return (
                          <div>
                            <a href={title}>{description}</a>
                          </div>
                        );
                      })}
                </div>
              );
          })
        }
      </body>
  );
};

export default HotlineSearch