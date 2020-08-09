//@ts-nocheck
import React, {useState , useEffect } from 'react';
import Container from '@material-ui/core/Container';

import Layout     from '../components/layout';
import BannerMain from '../components/BannerMain';
import Carousel   from '../components/Carousel';

import API  from '../services/api';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getAllCategoriesWithVideos()
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  if (!data.length) {
    return null;
  }

  return (
    <Layout>
      <BannerMain
        videoTitle={data[0].extraLink.text}
        url={data[0].extraLink.url}
        youTubeID={data[0].extraLink.backgroundImgYouTubeID}
        videoDescription="The story of Hong Gil-dong's life, love, and battle history in an era of violence."
      />

      <Container>
        {data.map((item: any) => (
          <Carousel
            category={item}
          />
        ))}
      </Container>
    </Layout>
  );
}

export default App;
