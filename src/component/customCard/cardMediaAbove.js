import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import NoImage from "../../assets/no_image.jpeg";

import {
  StyledCard,
  StyledCardContent,
  ArticleBody,
  ArticleHeading,
  ArticleSubHeading,
  AnchorTagWrapper,
} from "./styles";

const CardMediaAbove = ({ article }) => {
  if (!article) {
    return null;
  }
  const { title, description, url, urlToImage, author, publishedAt } =
    article;
  return (
    <AnchorTagWrapper
      className="card-media_above"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <StyledCard>
        <CardMedia
          sx={{ height: 140 }}
          component="img"
          image={urlToImage || NoImage}
          title={title}
        />

        <StyledCardContent className="card-content-sec">
          <ArticleHeading gutterBottom variant="h5">
            {title || ""}
          </ArticleHeading>
          <ArticleBody variant="body2" color="text.primary">
            {description || ""}
          </ArticleBody>
          <ArticleSubHeading gutterBottom variant="h6">
            {author}
          </ArticleSubHeading>
          <Typography variant="overline" display="block" gutterBottom>
            {new Date(publishedAt).toLocaleDateString()}
          </Typography>
        </StyledCardContent>
      </StyledCard>
    </AnchorTagWrapper>
  );
};

export default CardMediaAbove;
//
