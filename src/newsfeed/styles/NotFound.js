import styled from "styled-components";

export const StyledError = styled.div`
  height: 100vh;
  overflow: hidden;

  & h2 {
    text-align: center;
    font-family: "Syne Mono", monospace;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  & h2 a {
    text-decoration: underline;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & svg {
    height: 40rem;
    width: 40rem;
    max-width: 50rem;
  }
`;
