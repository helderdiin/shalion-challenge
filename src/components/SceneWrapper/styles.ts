import styled from 'styled-components';
import { getTheme, ifStyle, pxToRem } from '~/utils';

const sceneSpacing = getTheme('sceneSpacing');
const largeSpacing = getTheme('largeSpacing');
const backgroundLight = getTheme('background.light');
const showSideSection = ifStyle('showSideSection');

type Props = {
  showSideSection: boolean;
};

export const ChildrenWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Constrain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
  height: 100%;
  flex: 1;
  padding: ${pxToRem(16)} ${largeSpacing};
  background: ${backgroundLight};
  z-index: 1;
`;

export const SidebarWrapper = styled.div<Props>`
  align-self: flex-start;
  justify-content: flex-start;
  margin-top: ${sceneSpacing};
  padding: ${sceneSpacing};
  display: ${showSideSection('flex', 'none')};
`;
