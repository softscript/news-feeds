import React from "react";
import classnames from "classnames"
import CardMedia from "@mui/material/CardMedia";
import {
  StyledCard,
  StyledCardContent,
  ArticleBody,
  ArticleHeading
} from "./styles";

export function CardVideoAbove({featuredItem, media }) {
  return (
    <StyledCard className="more-video__card">
      <CardMedia
        component="iframe"
        className={classnames({
            'latest-videos-featured-item': featuredItem,
            'latest-multi-videos-item' : !featuredItem
        })}
        image={media.mediaUrl || ''}
        autoPlay
      />
      <StyledCardContent>
        <ArticleHeading gutterBottom variant="h5">
          {media.title || ''}
        </ArticleHeading>
        <ArticleBody variant="body2" color="text.primary">
        {media.description || ''}
        </ArticleBody>
      </StyledCardContent>
    </StyledCard>
    // </CardWrapper>
  );
}



// image={"https://www.youtube.com/embed/i_5pt4FbzTk"}