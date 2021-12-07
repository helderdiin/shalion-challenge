import React from 'react';
import { Location } from 'history';
import { isEmpty } from 'lodash';
import { Redirect, Route } from 'react-router-dom';
import { Routes } from '~/routes';
import { Storage } from '~/services';
import { Container, Wrapper } from './styles';

type Props = {
  component: React.ElementType;
  location?: Location;
  path: string;
  exact?: boolean;
};

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const token = Storage.getToken();
  return (
    <Route
      {...rest}
      render={(props): JSX.Element => (
        <>
          {!isEmpty(token) ? (
            <Wrapper>
              <Container>
                <Component {...props} />
              </Container>
            </Wrapper>
          ) : (
            <Redirect
              to={{
                pathname: Routes.LOGIN,
                state: { from: props.location.pathname },
              }}
            />
          )}
        </>
      )}
    />
  );
};

export default PrivateRoute;
