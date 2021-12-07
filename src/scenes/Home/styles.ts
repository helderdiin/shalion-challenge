import styled from 'styled-components';
import { Table as _Table } from '~/modules';
import { getTheme } from '~/utils';

const primaryLight = getTheme('primary.light');
const primaryContrast = getTheme('primary.contrast');
const textDark = getTheme('text.dark');

export const Title = styled.h1``;

export const Wrapper = styled.div`
  flex-direction: column;
`;

export const Table = styled(_Table)`
  align-self: center;

  .ant-table-thead th.ant-table-column-has-sorters:hover {
    background: #fafafa;
  }

  td.ant-table-column-sort {
    background: ${primaryLight}dd;
  }

  .ant-table-row:hover {
    color: ${textDark};
  }

  .ant-table {
    background: ${primaryLight}dd;
    color: ${primaryContrast};
  }

  .ant-spin-container {
    flex-direction: column;
    align-items: center;
  }
`;
