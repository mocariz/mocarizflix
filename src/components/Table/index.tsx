import React from 'react';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import * as S from './styled';

export interface ComponentProps {
  headers: Array<string>;
  data: Array<{ id: number, title: string }>
  prefix: string;
}

const Component = (props: ComponentProps) => {
  return (
    <TableContainer>
      <S.TableContainer>
        <S.Head>
          <TableRow>
            {props.headers.map((item: string) => (
              <TableCell>{item}</TableCell>
            ))}
            <TableCell width={'15%'}></TableCell>
          </TableRow>
        </S.Head>
        <TableBody>
          {props.data.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="edit" color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </S.TableContainer>
    </TableContainer>
  )
}

export default Component;