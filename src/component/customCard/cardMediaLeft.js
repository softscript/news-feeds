import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import NoImage from "../../assets/no_image.jpeg";

import {
  StyledCard,
  ArticleBody,
  ArticleHeading,
  ArticleSubHeading,
  AnchorTagWrapper,
  StyledCardContent,
} from "./styles";

export default function CardMediaLeft({ article }) {
  if (!article) {
    return null;
  }
  const {
    title,
    description,
    url,
    urlToImage,
    author,
    publishedAt,
  } = article;
  // const imageSrc = urlToImage ? `//${urlToImage}`: NoImage;
  return (
    <AnchorTagWrapper className="card-media_left" href={url} target="_blank" rel="noreferrer">
      <StyledCard sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={urlToImage || NoImage}
          title={title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledCardContent>
            <ArticleHeading variant="h5">{title}</ArticleHeading>
            <ArticleSubHeading variant="subtitle1">{author}</ArticleSubHeading>
            <Typography variant="overline" display="block" gutterBottom>
              {new Date(publishedAt).toLocaleDateString()}
            </Typography>
          </StyledCardContent>
          <Box>
            <ArticleBody
              sx={{ p: 0, m: 1.5 }}
              variant="body2"
              color="text.primary"
              maxline={4}
            >
              {description}
            </ArticleBody>
          </Box>
        </Box>
      </StyledCard>
    </AnchorTagWrapper>
  );
}
