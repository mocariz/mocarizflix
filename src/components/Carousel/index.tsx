import React from 'react';
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
  const categoryExtraLink = category.extraLink;
  const videos = category.videos;

  console.log(category)
  return (
    <S.VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <S.Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </S.Title>
          {categoryExtraLink && 
            <S.ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </S.ExtraLink>
          }
        </>
      )}
      <S.VideoCardList>
        {videos.map((video: VideoProps, index: number) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </S.VideoCardList>
    </S.VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
