import React, { FC } from 'react';
import { Button } from './styles';

export type Props = {
  onClick(): void;
};

const ButtonWrapper: FC<Props> = ({ onClick, children }): JSX.Element => (
  <Button onClick={onClick}>{children}</Button>
);

export default ButtonWrapper;
