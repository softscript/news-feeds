import React from "react";
import { Card } from "../styles/Card";
import { Card as MuiCard } from "@mui/material";
import {
  ArticleHeading,
  AsideFooter,
  AsideMain,
  Div1Main,
  ImageDiv,
  StyledAside,
  StyledDiv1,
} from "../styles/Main";
import { ReactComponent as More } from "./../assets/east_black_24dp.svg";
import { Link } from "react-router-dom";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function Div1({ general, technology, sports, entertainment, business }) {
  var arrCollection = [...entertainment, ...technology, ...business];
  var newGeneral = [];
  var popularContent = [
    ...general,
    ...technology,
    ...sports,
    ...entertainment,
    ...business,
  ];
  var popularMain = [];

  shuffle(arrCollection);

  arrCollection.forEach((article) => {
    if (article.image !== null) {
      newGeneral.push(article);
    }
  });

  shuffle(newGeneral);
  shuffle(popularContent);

  popularContent.forEach((article) => {
    if (article.image !== null) {
      popularMain.push(article);
    }
  });

  newGeneral.length = 6;
  popularMain.length = 7;

  return (
    <StyledDiv1>
      <Div1Main className="div-1-main">
        {newGeneral[5]?.title ? (
          <>
            <div className="new-general-title-1">
              <Card className="new-general-title-1-card-1">
                <a href={newGeneral[0].url} target="_blank" rel="noreferrer">
                  <ImageDiv>
                    <img
                      src={newGeneral[0].image}
                      alt={`Thumbnail of ${newGeneral[0].title}`}
                    />
                  </ImageDiv>
                  <ArticleHeading>
                    <p>{newGeneral[0].category}</p>
                    <h3>{newGeneral[0].title} </h3>
                    <p>{newGeneral[0].author || newGeneral[0].source} </p>
                  </ArticleHeading>
                </a>
              </Card>
              <Card className="new-general-title-card-2">
                <a href={newGeneral[1].url} target="_blank" rel="noreferrer">
                  <ImageDiv>
                    <img
                      src={newGeneral[1].image}
                      alt={`Thumbnail of ${newGeneral[1].title}`}
                    />
                  </ImageDiv>
                  <ArticleHeading>
                    <p>{newGeneral[1].category}</p>
                    <h3>
                      {newGeneral[1].title.length > 75
                        ? `${newGeneral[1].title.slice(0, 75)}...`
                        : newGeneral[1].title}
                    </h3>
                    <p>{newGeneral[1].author || newGeneral[1].source} </p>
                  </ArticleHeading>
                </a>
              </Card>
            </div>
            <div className="new-general-title-2">
              <div className="new-general-title-2-div-1">
                <Card className="new-general-title-2-card-1">
                  <a href={newGeneral[2].url} target="_blank" rel="noreferrer">
                    <ImageDiv>
                      <img
                        src={newGeneral[2].image}
                        alt={`Thumbnail of ${newGeneral[2].title}`}
                      />
                    </ImageDiv>
                    <ArticleHeading>
                      <p>{newGeneral[2].category}</p>
                      <h3>
                        {newGeneral[2].title.length > 40
                          ? `${newGeneral[2].title.slice(0, 40)}...`
                          : newGeneral[2].title}
                      </h3>
                      <p>{newGeneral[2].author || newGeneral[2].source} </p>
                    </ArticleHeading>
                  </a>
                </Card>
                <Card className="new-general-title-2-card-2">
                  <a href={newGeneral[3].url} target="_blank" rel="noreferrer">
                    <ImageDiv>
                      <img
                        src={newGeneral[3].image}
                        alt={`Thumbnail of ${newGeneral[3].title}`}
                      />
                    </ImageDiv>
                    <ArticleHeading>
                      <p>{newGeneral[3].category}</p>
                      <h3>
                        {newGeneral[3].title.length > 40
                          ? `${newGeneral[3].title.slice(0, 40)}...`
                          : newGeneral[3].title}
                      </h3>
                      <p>{newGeneral[3].author || newGeneral[3].source} </p>
                    </ArticleHeading>
                  </a>
                </Card>
              </div>

              <Card className="new-general-title-2-card-3">
                <a href={newGeneral[4].url} target="_blank" rel="noreferrer">
                  <ImageDiv>
                    <img
                      src={newGeneral[4].image}
                      alt={`Thumbnail of ${newGeneral[4].title}`}
                    />
                  </ImageDiv>
                  <ArticleHeading>
                    <p>{newGeneral[4].category}</p>
                    <h3>{newGeneral[4].title} </h3>
                    <p>{newGeneral[4].author || newGeneral[4].source} </p>
                  </ArticleHeading>
                </a>
              </Card>
            </div>
            <div className="new-general-title-3">
              <Card className="new-general-title-3-card">
                <a href={newGeneral[5].url} target="_blank" rel="noreferrer">
                  <ImageDiv>
                    <img
                      src={newGeneral[5].image}
                      alt={`Thumbnail of ${newGeneral[5].title}`}
                    />
                  </ImageDiv>
                  <ArticleHeading>
                    <p>{newGeneral[5].category}</p>
                    <h3>
                      {" "}
                      {newGeneral[5].title.length > 55
                        ? `${newGeneral[5].title.slice(0, 55)}...`
                        : newGeneral[5].title}
                    </h3>
                    <p>{newGeneral[5].author || newGeneral[5].source} </p>
                  </ArticleHeading>
                </a>
              </Card>
            </div>
          </>
        ) : (
          ""
        )}
      </Div1Main>
      <StyledAside>
        <Card>
          <div>
            <h2>Most Popular</h2>
          </div>
          <AsideMain>
            {popularMain.map((article, idx) => {
              return (
                <div key={idx}>
                  <a href={article.url} target="_blank" rel="noreferrer">
                    <ImageDiv>
                      <img
                        src={article.image}
                        alt={`Thumbnail of ${article.title}`}
                      />
                    </ImageDiv>
                    <div>
                      <p>{article.category}</p>
                      <h3>
                        {article.title.length > 55
                          ? `${article.title.slice(0, 55)}...`
                          : article.title}{" "}
                      </h3>
                      <p>{article.author || article.source}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </AsideMain>
          <AsideFooter>
            <Link to="/popular">
              <div role="button">
                <More />
              </div>
              <h4>More Stories</h4>
            </Link>
          </AsideFooter>
        </Card>
      </StyledAside>
    </StyledDiv1>
  );
}

export default Div1;
