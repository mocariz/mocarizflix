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
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="teste"
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Footer />
    </div>
  );
}

export default App;
