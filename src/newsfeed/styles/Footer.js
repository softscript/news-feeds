import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem;
  align-items: center;

  & h5 {
    font-family: "Monoton", cursive;
    font-size: 2.2rem;
    text-transform: uppercase;
    margin-bottom: 0.9px;
    background: linear-gradient(#181818, #b3b3b3, #282828);
    background: -webkit-linear-gradient(#181818, #b3b3b3, #282828);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & div a {
    text-decoration: underline;
  }
`;
