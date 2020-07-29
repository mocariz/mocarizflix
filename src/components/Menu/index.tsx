import React from 'react';
import Logo from '../../assets/img/LogoMain.svg';
import ButtonLink from '../ButtonLink';
import * as S from "./styled";

const Menu = () => {

  return (
    <S.Nav>
      <a href="/">
        <S.Logo src={Logo} alt="MocarizFlix logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/register/video">
        Novo vídeo
      </ButtonLink>
    </S.Nav>
  )
}

export default Menu;