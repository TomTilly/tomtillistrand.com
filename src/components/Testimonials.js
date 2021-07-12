import React from 'react';
import styled from 'styled-components';
import Testimonial from './Testimonial';
import romainSrc from '../assets/images/clients/romain.jpeg';

function Testimonials() {
  return (
    <>
      <Testimonial
        name="Romain Aubanel"
        avatar={romainSrc}
        quote="I strongly recommend Tom’s services. Tom delivers high-quality websites that always integrate state-of-the-art features. Tom is always on time and goes the extra mile to make sure we are satisfied.  It’s a pleasure to work with him."
        company="LNRJ United"
      />
      <Testimonial
        name="Romain Aubanel"
        avatar={romainSrc}
        quote="I strongly recommend Tom’s services. Tom delivers high-quality websites that always integrate state-of-the-art features. Tom is always on time and goes the extra mile to make sure we are satisfied.  It’s a pleasure to work with him."
        company="LNRJ United"
        alternate
      />
    </>
  );
}

export default Testimonials;
