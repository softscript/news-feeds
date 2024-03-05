import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  background-color: #fff;
  z-index: 1;
  top: 0;

  & > :first-child {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    text-align: center;
  }

  & h1 {
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
`;

export const StyledNav = styled.nav`
  border-bottom: 0.7px solid ${({ theme }) => theme.borderColor};
  display: flex;
  justify-content: space-around;

  & a {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    border-right: 1px solid ${({ theme }) => theme.borderColor};
    font-family: "Syne Mono", monospace;
  }

  & a:hover {
    color: #fff;
  }

  & > :nth-child(1):hover {
    background-color: ${({ theme }) => theme.hoverColors[0]};
  }
  & > :nth-child(2):hover {
    background-color: ${({ theme }) => theme.hoverColors[1]};
  }
  & > :nth-child(3):hover {
    background-color: ${({ theme }) => theme.hoverColors[2]};
  }
  & > :nth-child(4):hover {
    background-color: ${({ theme }) => theme.hoverColors[3]};
  }
  & > :nth-child(5):hover {
    background-color: ${({ theme }) => theme.hoverColors[4]};
  }
  & > :nth-child(6):hover {
    background-color: ${({ theme }) => theme.hoverColors[5]};
  }

  @media (max-width: 550px) {
    display: none;
  }
`;
