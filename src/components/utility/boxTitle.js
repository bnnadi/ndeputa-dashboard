import React from 'react';
import { BoxTitle, BoxSubTitle } from './boxTitle.style';

export default props => {
  return (
    <div>
      {props.title
        ? <BoxTitle className="nnaBoxTitle">
            {' '}{props.title}{' '}
          </BoxTitle>
        : ''}
      {props.subtitle
        ? <BoxSubTitle className="nnaBoxSubTitle">
            {' '}{props.subtitle}{' '}
          </BoxSubTitle>
        : ''}
    </div>
  );
};
