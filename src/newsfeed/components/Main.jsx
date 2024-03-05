import React from "react";
import { Card } from "../styles/Card";
import { Container } from "../styles/Container";
import {
  ArticleHeading,
  ImageDiv,
  StyledFullDiv,
  StyledMain,
} from "../styles/Main";
import Div1 from "./Div1";
import Div2 from "./Div2";
import FinalDiv from "./FinalDiv";
import VideosDiv from "./VideosDiv";

function Main({
  general,
  technology,
  business,
  sports,
  science,
  entertainment,
}) {
  var newTechnology = [];

  entertainment.forEach((article) => {
    if (article.image !== null) {
      newTechnology.push(article);
    }
  });

  return (
    <StyledMain>
      <Container>
        <Div1
          general={general}
          technology={technology}
          business={business}
          sports={sports}
          science={science}
          entertainment={entertainment}
        />
        <VideosDiv />
        <Div2
          general={general}
          technology={technology}
          business={business}
          sports={sports}
          science={science}
          entertainment={entertainment}
        />
        <StyledFullDiv>
          <Card>
            <a href={newTechnology[4].url} target="_blank" rel="noreferrer">
              <ImageDiv>
                <img
                  src={newTechnology[4].image}
                  alt={`Thumbnail of ${newTechnology[4].title}`}
                />
              </ImageDiv>
              <ArticleHeading>
                <p>{newTechnology[4].category}</p>
                <h3>{newTechnology[2].title} </h3>
                <p>{newTechnology[4].author || newTechnology[4].source} </p>
              </ArticleHeading>
            </a>
          </Card>
        </StyledFullDiv>
        <FinalDiv
          general={general}
          technology={technology}
          business={business}
          sports={sports}
          science={science}
          entertainment={entertainment}
        />
      </Container>
    </StyledMain>
  );
}

export default Main;
