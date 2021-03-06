import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config';

export default ({ collapsed }) => {
  return (
    <div className="nnaLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/">
              <i className={siteConfig.siteIcon} />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/">{siteConfig.siteName}</Link>
        </h3>
      )}
    </div>
  );
};
