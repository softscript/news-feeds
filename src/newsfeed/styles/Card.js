import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 18px 15px;
  margin: 3px;
  color: #333;
  border-top: 3px solid #333;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    position: relative;
    top: -5px;
  }
`;
