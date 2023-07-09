import React from 'react'
const getHotlineData = async (url) => {
  try {
      const response = await fetch('http://localhost:3000/api/' + url);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error);
  }
}

const ResourceName = async ({ params }) => {
  let data = await getHotlineData('resource');
  // if (params.ResourceName == ) {
  //   element = <p>The condition is true!</p>;
  // } else {
  //   element = <p>The condition is false!</p>;
  // }
  return (
    <body className='container' id="ResourcesMainContainer">
            <h1>Resource</h1>
            {
              data.map(({category, types}) => {
                  return (
                    <div>
                      <div>
                      </div>
                      <div className='resource-grid'>
                            {types.map(({title, description, image_path}) => {
                              return (
                                <div className='resource-item'>
                                  <h1>Test</h1>
                                </div>
                              );
                            })}
                      </div>
                    </div>
                  );
              })
            }
          </body>

  )
}

export default ResourceName