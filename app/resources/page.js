import React from 'react'
import '../../styles/hotline.css';
import '../../styles/resource.css';
import Link from 'next/link';
import Image from 'next/image'
import getHotlineData from '../../helpers/endpoints'

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
                              {/* <Image src={image_path} alt={description}></Image> */}
                              <div className='resource-info'>
                                <h2 className='resource-title'>{title}</h2>
                                <p className='resource-desc'>{description}</p>
                                <Link className='resource-link ' href={'/Resources/' + title}>More Infomation</Link>
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