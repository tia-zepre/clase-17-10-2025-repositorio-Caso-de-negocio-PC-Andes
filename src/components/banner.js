
import React from 'react'

import imagenBanner from '../assets/images/componentes-banner.jpg'



function Banner() {
  
  return (
    <div className=' col-lg-12'>
      
      <img src={imagenBanner} alt="Banner" />
    </div>
  );
}

export default Banner;