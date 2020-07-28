import React from 'react';

import * as S from './styles';

const getYouTubeId = (youtubeURL: string) => {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export interface ComponentProps {
  videoTitle: string;
  videoURL: string;
  categoryColor: string;
}

const VideoCard = (props: ComponentProps) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(props.videoURL)}/hqdefault.jpg`;

  return (
    <S.VideoCardContainer
      url={image}
      href={props.videoURL}
      target="_blank"
      style={{ borderColor: props.categoryColor || 'red' }}
      title={props.videoTitle}
    />
  );
}

export default VideoCard;
