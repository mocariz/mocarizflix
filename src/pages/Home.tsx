//@ts-nocheck
import React from 'react';

import dadosIniciais from '../data/dados_iniciais.json';

import Layout from '../components/layout';
import BannerMain from '../components/BannerMain';
import Carousel from '../components/Carousel';

const App = () => {
  return (
    <Layout>    
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
    </Layout>
  );
}

export default App;
