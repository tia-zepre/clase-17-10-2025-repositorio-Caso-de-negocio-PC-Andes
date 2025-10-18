
import React from 'react'
import imagen from '../assets/images/componentes-banner.jpg'

function Banner() {
  return (
    <div className=' col-lg-12'>
        <img src={imagen} alt="Banner" />
    </div>
  );
}

export default Banner;