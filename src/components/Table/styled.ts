import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';


export const TableContainer = styled(Table)`
  border: 2px solid #fff;
  color: var(--grayMedium);

  td {
    color: var(--grayMedium);
  }
`

export const Head = styled(TableHead)`
  border: 2px solid #fff;

  th {
    color: var(--grayMedium);
    font-weight: bold;
  }
`