import styled from "styled-components";

export const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  overflow: auto;
  padding: 0 7rem;

  @media (max-width: 1190px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 850px) {
    padding: 0 1rem;
  }
  @media (max-width: 550px) {
    padding: 0 0.5rem;
  }
`;
