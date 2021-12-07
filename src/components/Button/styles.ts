import styled from 'styled-components';
import { getTheme, pxToRem } from '~/utils';

const buttonRadius = getTheme('smallRadius');
const smallSpacing = getTheme('smallSpacing');
const disabledColor = getTheme('disabled');

export const Button = styled.button`
  border-radius: ${buttonRadius};
  font-weight: bold;
  text-transform: capitalize;
  font-size: ${pxToRem(16)};
  padding: ${smallSpacing};

  &:disabled {
    background-color: ${disabledColor};
  }
`;
