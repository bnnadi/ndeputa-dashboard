import React from "react";
import { LayoutContentWrapper } from "./layoutWrapper.style";

export default props => (
  <LayoutContentWrapper
    className={
      props.className != null
        ? `${props.className} nnaLayoutContentWrapper`
        : "nnaLayoutContentWrapper"
    }
    {...props}
  >
    {props.children}
  </LayoutContentWrapper>
);
