import styled from "styled-components";

export const StyledLoader = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;

  & > div {
    width: 70px;
    height: 70px;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-color: #ccc #0000;
    animation: s6 1s infinite linear;
  }

  & > div::before,
  & > div::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
  }
  & > div::before {
    border-color: #212124 #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }
  & > div::after {
    margin: 8px;
  }

  @keyframes s6 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
