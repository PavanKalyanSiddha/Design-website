import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background: black;
`;

export const Title = styled.h1`
  color: #00ff00;
  font-size: 25px;
`;

export const Text = styled.span`
  color: white;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 20px;
  text-align: left;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItem = styled.div`
  padding: 10px 30px;

  display: flex;
  align-items:center;
  justify-content: flex-start;
  span {
    vertical-align: middle;
    padding: 0px 20px;
    width: 70px;
  }

  img {
    height: 100px;
    width: 100px;
    vertical-align: middle;
  }

  .blackText {
    color: black;
    font-weight: 600;
  }
`;
