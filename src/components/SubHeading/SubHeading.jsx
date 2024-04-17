import React from 'react';
import images from '../../constants/images';

const SubHeading = (props) => (
  <div style={{marginBottom:"1rem"}}>
   <p className='p__cormorant'>{props.title}</p>
   <img src={images.spoon} alt='spon' className='spoon__image' />
  </div>
);

export default SubHeading;
