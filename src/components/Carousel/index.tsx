import React from 'react';
import Slider from './components/Slider';

import VideoCard from './components/VideoCard';

import * as S from './styles';

export interface VideoProps {
  title: string;
  url: string;
}

export interface ComponentProps {
  ignoreFirstVideo?: boolean;
  category: {
    title: string;
    color: string;
    extraLink: {
      url: string;
      text: string;
    };
    videos: Array<VideoProps>;
  };
}

const VideoCardGroup = (props: ComponentProps) => {
  const { category, ignoreFirstVideo } = props;
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const videos = category.videos;

  return (
    <S.VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <S.Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </S.Title>
        </>
      )}
      <Slider>
        {videos.map((video: VideoProps, index: number) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <S.SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </S.SliderItem>
          );
        })}
      </Slider>
    </S.VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
