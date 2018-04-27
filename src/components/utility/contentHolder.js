import React from 'react';
import { ContentHolderWrapper } from './contentHolder.style';

export default props => (
  <ContentHolderWrapper className="nnaExampleWrapper" style={props.style}>
    {props.children}
  </ContentHolderWrapper>
);
