import React from "react";

import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div className='app__aboutus'>
    <h3>a little about us</h3>
    <div className="about--content">
        <div className="about--copy">
            <p>At Grounded, we are passionate about delicious coffee and excellent service. We carefully select our beans from local roasters and brew them to perfection, resulting in a rich, full-bodied cup of coffee that is sure to satisfy. Our friendly baristas are knowledgeable about our offerings and are always happy to help you choose the perfect drink for your taste.</p>
            <p>In addition to our delicious coffee, we also offer a variety of tasty snacks to enjoy with your drink. From freshly baked pastries to savory sandwiches, there's something for everyone at Grounded. Come relax in our comfortable atmosphere and enjoy a warm cup of coffee while taking in the beautiful scenery of the North Star State. Stop by and see us today for a truly enjoyable coffee experience!</p>    
        </div>
        <img src={images.aboutus}/>
    </div>
  </div>
);

export default AboutUs;