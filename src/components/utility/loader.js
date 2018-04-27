import React from "react";
import LoaderComponent from "./loader.style";

export default Loader => (
  <LoaderComponent>
    <svg className="nnaContentLoader" viewBox="0 0 50 50">
      <circle
        className="nnaContentLoaderCircle"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="3.6"
      />
    </svg>
  </LoaderComponent>
);
