import React, { FC, ReactNode } from 'react';
import { ChildrenWrapper, Constrain, SidebarWrapper } from './styles';

type Props = {
  sideSection?: JSX.Element | ReactNode;
  showSideSection?: boolean;
};

const SceneWrapper: FC<Props> = ({
  sideSection,
  children,
  showSideSection,
  ...rest
}): JSX.Element => {
  return (
    <ChildrenWrapper {...rest}>
      <Constrain>{children}</Constrain>
      <SidebarWrapper showSideSection={!!showSideSection}>
        {sideSection}
      </SidebarWrapper>
    </ChildrenWrapper>
  );
};

export default SceneWrapper;
