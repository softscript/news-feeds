import React from "react";
import { StyledFinalDiv } from "../styles/FinalDiv";
import CategoryDiv from "./CategoryDiv";

function FinalDiv({
  general,
  technology,
  science,
  business,
  entertainment,
  sports,
}) {
  var newTechnology = [];
  var newSports = [];
  var newBusiness = [];

  technology.forEach((article) => {
    if (article.image !== null) {
      newTechnology.push(article);
    }
  });
  sports.forEach((article) => {
    if (article.image !== null) {
      newSports.push(article);
    }
  });
  business.forEach((article) => {
    if (article.image !== null) {
      newBusiness.push(article);
    }
  });

  return (
    <StyledFinalDiv>
      <CategoryDiv
        data={technology}
        heading="Technology"
        limit={7}
        margin={false}
      />
      <CategoryDiv
        data={business}
        heading="Business"
        limit={7}
        margin={false}
      />
      <CategoryDiv
        data={general}
        heading="General"
        limit={4}
        margin={true}
        fill={newSports[3]}
      />
      <CategoryDiv
        data={science}
        heading="Health"
        limit={4}
        margin={true}
        fill={newBusiness[1]}
      />
      <CategoryDiv
        data={entertainment}
        heading="Entertainment"
        limit={4}
        margin={true}
        fillTwo={newTechnology[5]}
      />
      <CategoryDiv data={sports} heading="Sports" limit={7} margin={false} />
    </StyledFinalDiv>
  );
}

export default FinalDiv;
