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
        videoTitle={dadosIniciais.categorias[0].extraLink.text}
        url={dadosIniciais.categorias[0].extraLink.url}
        youTubeID={dadosIniciais.categorias[0].extraLink.backgroundImgYouTubeID}
        videoDescription="The story of Hong Gil-dong's life, love, and battle history in an era of violence."
      />

      <div className="container">
        {dadosIniciais.categorias.map((item: any) => (
          <Carousel
            category={item}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
