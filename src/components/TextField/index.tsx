import React from 'react';
import * as S from './styled';

export interface ComponentProps {
  label: string;
  value: string;
  type: 'text' | 'color' | 'textarea';
  onChange: (field: any, value: any) => void;
  id: string;
}

const Component = (props: ComponentProps) => {
  return (
    <S.Field
      id={props.id}
      label={props.label}
      defaultValue="Adicione uma categoria"
      variant="filled"
      type={props.type}
      value={props.value}
      onChange={(event: any) => props.onChange(event.target.id, event.target.value)}
      fullWidth
      multiline={props.type === 'textarea'}
      rows={3}
    />
  )
}

export default Component;