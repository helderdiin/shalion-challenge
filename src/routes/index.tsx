import React from 'react';
import { inject, observer } from 'mobx-react';
import { Switch } from 'react-router-dom';
import { Home } from '~/scenes';
// import Private from './private';
import Public from './public';
import { Routes } from './routing';

const RoutesContainer: React.FC = () => (
  <Switch>
    <Public exact path={Routes.HOME} component={Home} />
  </Switch>
);

export { Routes };
export default inject('routing')(observer(RoutesContainer));
