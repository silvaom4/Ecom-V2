import React from 'react'

export default function Slider() {
  return (
    <div className='slider-div'>

    
        
      <div className="slidershow middle"> 
       
  <div className="slides">
    <input type="radio" name="r" id="r1" defaultChecked="" />
    <input type="radio" name="r" id="r2" />
    <input type="radio" name="r" id="r3" />
    <input type="radio" name="r" id="r4" />
    <input type="radio" name="r" id="r5" />
    {/* -- */}
    <div className="slide s1">
      <img src="../../images/traveling-gucci.avif" alt="Gucci models traveling" />
    </div>
    {/* -- */}
    <div className="slide">
      <img
        src="../../images/gucci-ski-gogs-pink.avif"
        alt="Pink Gucci ski goggles "
      />
    </div>
    {/* -- */}
    <div className="slide">
      <img src="../../images/gucci-bag-greyy.avif" alt="grey Gucci bag" />
    </div>
    {/* -- */}
    <div className="slide">
      <img src="../../images/gucci-bag-model.avif" alt="Gucci bag model" />
    </div>
    {/* -- */}
    <div className="slide">
      <img src="../../images/gucci-bag-sky.avif" alt="Sky blue Gucci bag" />
    </div>
    {/* -- */}
  </div>
  <div className="navigation">
    <label htmlFor="r1" className="bar" />
    <label htmlFor="r2" className="bar" />
    <label htmlFor="r3" className="bar" />
    <label htmlFor="r4" className="bar" />
    <label htmlFor="r5" className="bar" />
  </div>
</div>

    </div>
  )
}
