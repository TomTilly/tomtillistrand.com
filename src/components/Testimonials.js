import React from 'react';
import styled from 'styled-components';
import Testimonial from './Testimonial';

function Testimonials({ testimonials }) {
  return (
    <>
      {testimonials.map((t, i) => (
        <Testimonial
          name={t.name}
          avatar={t.avatar}
          quote={t.quote}
          company={t.company}
          alternate={i % 2 !== 0}
          key={i}
        />
      ))}
    </>
  );
}

export default Testimonials;
