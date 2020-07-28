//@ts-nocheck
import React from 'react';

import dadosIniciais from './data/dados_iniciais.json';

import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ background: 'rgb(20, 20, 20)' }}>
      <Menu />
    
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].title}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que faz uma desenvolvedora front-end?"
      />

      {dadosIniciais.categorias.map((item: any) => (
        <Carousel 
          ignoreFirstVideo
          category={item}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
