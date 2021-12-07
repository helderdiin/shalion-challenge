import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 87px;
  align-items: center;
  background-color: #fff;
  position: absolute;
  border-bottom: 1px solid #eee;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Overlay = styled.div`
  position: absolute;
  display: inline-block;
  justify-content: space-between;
  display: flex;
  align-items: center;
  min-width: 100%;
  z-index: 101;

  @media screen and (min-width: 375px) {
    padding: 1em 2em;
  }

  @media screen and (max-width: 374px) {
    padding: 1em 1em;
  }
`;

export const LogoWrapper = styled.a`
  margin-right: 30px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.02) !important;
  }
`;
