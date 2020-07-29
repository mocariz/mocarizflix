import React from 'react';
import * as S from './styled';

export interface ComponentProps {
  className?: string;
  href: string;
  children: any;
}

const ButtonLink = (props: ComponentProps) => {
  return (
    <S.ButtonLink className={props.className} to={props.href}>
      {props.children}
    </S.ButtonLink>
  );
}

export default ButtonLink;