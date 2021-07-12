import React from 'react';
import styled from 'styled-components';
import { above } from '../utilities';

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  box-shadow: var(--elevation-2);
  border-radius: var(--border-radius);
  background-color: var(--accent-bg);

  ${above.large`
    flex-direction: row;
    align-items: flex-start;
  `}
`;

const IconWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem;
  margin-bottom: 1rem;

  ${({ rgb }) => {
    if (!rgb) return;
    const rgbString = rgb.map(String).join(', ');
    return `background-color: rgba(${rgbString}, .1);`;
  }}
  svg {
    ${({ rgb }) => {
      if (!rgb) return;
      const rgbString = rgb.map(String).join(', ');
      return `color: rgb(${rgbString})`;
    }}
  }

  ${above.small`
    margin-right: 2rem;
  `}
`;

const CardTitle = styled.h3`
  margin-top: 0;
  font-size: var(--h4);
  text-align: center;

  ${above.large`
    text-align: left;
  `}
`;

const CardDescription = styled.p`
  margin-bottom: 0;
  text-align: center;

  ${above.small`
    text-align: left;
  `}
`;

export default function Card({ title, description, Icon, rgb }) {
  return (
    <CardStyles>
      <IconWrapper rgb={rgb}>
        <Icon />
      </IconWrapper>
      <div>
        <CardTitle className="h4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CardStyles>
  );
}
