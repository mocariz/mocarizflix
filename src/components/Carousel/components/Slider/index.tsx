
import React from 'react';
import SlickSlider from 'react-slick';
import * as S from './styles';

export interface ComponentProps {
  children: any;
}

const Slider = (props: ComponentProps) => {
  return (
    <S.Container>
      <SlickSlider {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
      >
        {props.children}
      </SlickSlider>
    </S.Container>
  )
};

export default Slider; 