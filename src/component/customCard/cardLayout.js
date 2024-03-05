import React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  StyledCard,
  StyledCardContent,
  ArticleBody,
  ArticleHeading,
  ArticleSubHeading,
  AnchorTagWrapper
} from "./styles";

const CardLayout = ({ num }) => {
  return (
    <AnchorTagWrapper href="google.com" target="_blank" rel="noreferrer">
    <StyledCard>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.w3schools.com/html/pic_trulli.jpg"
        title="green iguana"
      />
      <StyledCardContent>
        <ArticleHeading
          gutterBottom
          variant="h5"
          color="text.secondary"
        >
          Lizard {parseInt(num)}
        </ArticleHeading>
        <ArticleBody variant="body2" color="text.primary" maxline={2}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </ArticleBody>
        <ArticleSubHeading
          gutterBottom
          variant="h6"
          color="text.secondary"
        >
          Lizard 1
        </ArticleSubHeading>
      </StyledCardContent>
      <CardActions sx={{display: "flex", justifyContent: "center"}}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
    </AnchorTagWrapper>
  );
};

export default CardLayout;
