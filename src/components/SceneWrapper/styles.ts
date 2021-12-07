import styled from 'styled-components';
import { getTheme, ifStyle, pxToRem } from '~/utils';

const sceneSpacing = getTheme('sceneSpacing');
const largeSpacing = getTheme('largeSpacing');
const backgroundLight = getTheme('background.light');
const largeRadius = getTheme('largeRadius');
const inMediumScreen = getTheme('inMediumScreen');
const inSmallScreen = getTheme('inSmallScreen');
const showSideSection = ifStyle('showSideSection');

type Props = {
  showSideSection: boolean;
};

export const ChildrenWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* width: 85vw;
  margin: 0 ${sceneSpacing};
  max-width: ${pxToRem(1400)};
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: ${pxToRem(-24)};
  ${inMediumScreen} {
    width: 95vw;
    margin: ${pxToRem(-24)} ${largeSpacing} 0 ${largeSpacing};
  }
  ${inSmallScreen} {
    width: 95vw;
    margin: ${pxToRem(-24)} ${largeSpacing} 0 ${largeSpacing};
  } */
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
  /* border-radius: ${largeRadius} ${largeRadius} 0 0; */
  z-index: 1;
`;

export const SidebarWrapper = styled.div<Props>`
  align-self: flex-start;
  justify-content: flex-start;
  margin-top: ${sceneSpacing};
  padding: ${sceneSpacing};
  display: ${showSideSection('flex', 'none')};
`;
