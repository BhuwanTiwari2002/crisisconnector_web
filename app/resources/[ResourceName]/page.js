import React from 'react'
import getHotlineData from '../../../helpers/endpoints'

const ResourceName = async ({ params }) => {
  let data = await getHotlineData('resource');
  return (
      <body>
      <h1>Resource</h1>
      {
        data.map(({category, types}) => {
          return (
            <div className='detailsContainer'>
              <h2>{category}</h2>
              {types.map(({title, description, details, image_path}) => {
                return (
                  <div className='resource-item'>
                    {(() => {
                      if (params.ResourceName == title) {
                        return (
                          <>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <h2>Introduction</h2>
                            <p>{details.introduction}</p>
                            <h2>Symptoms</h2>
                            <ul>{details.symptoms.map(symptom => <li>{symptom}</li>)}</ul>
                            <h2>Causes</h2>
                            <ul>{details.causes.map(cause => <li>{cause}</li>)}</ul>
                          </>
                        );
                      } 
                    })()}
                  </div>
                );
              })}              
            </div>
          );
        })
      }
    </body>
  )
}

export default ResourceName