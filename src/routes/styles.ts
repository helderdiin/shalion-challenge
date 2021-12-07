import styled from 'styled-components';
import { getTheme } from '~/utils';

const background = getTheme('background.main');

export const Wrapper = styled.div`
  background-color: ${background};
  max-width: 100vw;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  background-color: ${background};
  flex: 1;
  flex-direction: column;
`;
