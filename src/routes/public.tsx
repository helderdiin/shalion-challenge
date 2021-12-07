import React from 'react';
import { Location } from 'history';
import { isEmpty } from 'lodash';
import { Redirect, Route } from 'react-router-dom';
import { Routes } from '~/routes';
import { Storage } from '~/services';

type Props = {
  component: React.ElementType;
  location?: Location;
  path: string;
  exact?: boolean;
};

const PublicRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const token = Storage.getToken();
  return (
    <Route
      {...rest}
      render={(props): JSX.Element => (
        <>
          {isEmpty(token) ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: Routes.HOME,
                state: { from: props.location.pathname },
              }}
            />
          )}
        </>
      )}
    />
  );
};

export default PublicRoute;
