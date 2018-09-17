import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import routePaths from './shared/settings/routePaths';

const Links = () => (
  <Fragment>
    <Link to={routePaths.HOME}> Home </Link>
    <Link to={routePaths.ABOUT_US}> About Us </Link>
  </Fragment>
);

export default Links;
