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
  return (
    <body>
            <h1>Resource</h1>
            {
              data.map(({category, types}) => {
                  return (
                    <div id='detailsContainer'>
                      <div>
                            {types.map(({title, description, details}) => {
                              return (
                                <div className='resource-item'>
                                  {(() => {
                                    if (params.ResourceName == title) {
                                      return(
                                        <>
                                          <h1>{title}</h1>
                                          <p>{description}</p>
                                          <p>{details}</p>
                                        </>
                                      );
                                      
                                    } 
                                  })()}
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