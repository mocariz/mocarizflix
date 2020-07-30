import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';

import * as S from './styles';

export interface ComponentProps {
  videoTitle: string;
  videoDescription: string;
  url: string;
  youTubeID?: string
}

const BannerMain = (props: ComponentProps) => {
  const getYouTubeId = (youtubeURL: string) => {
    return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
      );
    }
    
  const youTubeID = getYouTubeId(props.url);
  const bgYouTubeID = props.youTubeID ? props.youTubeID : youTubeID;

  const bgUrl = `https://img.youtube.com/vi/${bgYouTubeID}/maxresdefault.jpg`;
  
  return (
    <S.BannerMainContainer backgroundImage={bgUrl}>
      <S.ContentAreaContainer>
        <S.Item>
          <S.Title>
            {props.videoTitle}
          </S.Title>

          <S.Description>
            {props.videoDescription}
          </S.Description>
        </S.Item>

        <S.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <S.WatchButton>
            Assistir
          </S.WatchButton>
        </S.Item>
      </S.ContentAreaContainer>
    </S.BannerMainContainer>
  );
}

export default BannerMain;