import styled from "styled-components";
import { Card } from "./Card";

export const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  max-height: 10rem;

  & img {
    max-height: 10rem;
  }
`;

export const AsideMain = styled.div`
  margin: 0 0.7rem;

  & > div {
    height: 7rem;
    padding: 0.2rem;
    padding-top: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  & > :last-child {
    border-bottom: none;
  }

  @media (max-width: 850px) {
    & > div {
      height: 6rem;
      padding-top: 0.2rem;
    }
  }

  @media (max-width: 550px) {
    & > div {
      height: 7rem;
      padding-top: 0.2rem;
    }
  }
`;

export const ArticleHeading = styled.div`
  margin: 0.5rem;
  height: 5.3rem;
`;

export const StyledFinalDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 0.8rem;

  @media (max-width: 850px) {
    display: block;
  }
`;

export const StyledAside = styled.aside`
  & a ${ImageDiv} {
    margin-top: 0.7rem;
    width: 100%;
    height: 100%;
    max-height: 4rem;
  }

  & img {
    max-width: 5rem;
    height: 4rem;
  }

  & ${Card} > :first-child {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    padding-bottom: 1rem;
  }

  & > ${Card}:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 0px;
  }

  & ${Card}.fill {
    border-top: 3px solid #333;
    padding-left: 0.7rem;
    padding-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  & ${Card}.fillTwo {
    margin-top: 0.5rem;
  }

  & ${Card}.fill a {
    display: flex;
    border-bottom: none;
    flex-direction: column;
  }

  & ${Card}.fill:hover {
    position: relative;
    top: -5px;
  }

  & ${Card}.fill a ${ImageDiv} {
    max-height: none;
  }

  & ${Card}.fill a ${ImageDiv} img {
    height: 11rem;
    width: 96%;
    max-height: none;
    max-width: none;
  }

  & ${Card}.fill a h3 {
    font-weight: 700;
    margin: 0;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  & ${Card} ${AsideMain} a {
    display: grid;
    grid-template-columns: 30% 70%;
  }

  & a:hover {
    color: ${({ theme }) => theme.hoverColor};
  }

  & h2 {
    font-weight: 700;
    font-size: 1.8rem;
    margin: 0 1rem;
  }

  & p {
    font-family: "Share Tech Mono", monospace;
    text-transform: uppercase;
    font-size: 0.75rem;
    margin: 0;
    color: ${({ theme }) => theme.hoverColor};
  }

  & h3 {
    font-weight: 500;
    margin: 0;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  & > ${Card} {
    border-top: 9px solid #333;
    padding: 1rem 0;
    padding-bottom: 0.5rem;
    margin-left: 0;
  }

  @media (max-width: 850px) {
    & ${Card} ${AsideMain} a {
      grid-template-columns: 10% 90%;
      gap: 1rem;
    }

    & div a :nth-child(2) {
      margin-top: 0.5rem;
    }

    & ${Card}.fill a {
      flex-direction: row;
    }
  }

  @media (max-width: 550px) {
    & a ${ImageDiv} {
      margin-top: 1rem;
    }

    & ${Card} ${AsideMain} a {
      grid-template-columns: 20% 80%;
      gap: 1rem;
    }
  }
`;

export const AsideFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  & a {
    display: flex;
  }

  & a > div {
    background-color: #636161;
    width: 2rem;
    border-radius: 50%;
    margin: 0.6rem 1rem;
  }

  & a > div svg {
    margin-top: 0.3rem;
    margin-left: 0.4rem;
  }

  & h4 {
    align-self: center;
    text-transform: uppercase;
    font-family: "Syne Mono", monospace;
    font-weight: 500;
  }

  @media (max-width: 850px) {
    & a > h4 {
      margin-top: 0 !important;
    }
  }
`;
