import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: #000000;
  font: Gilroy;

  .doubleSlash {
    padding-left: 10%;
    height: 650px;
    width: 950px;
    @media screen and (max-width: 480px) {
      padding-left: 2%;
      height: 350px;
      width: 400px;
    }
  }
`;
export const Heading = styled.h1`
  tex-align: left;
  font-size: 80px;
  text-transform: uppercase;
  z-index: 100000;
  position: relative;
  top: -600px;
  padding-left: 20%;
  @media screen and (max-width: 480px) {
    top: -300px;
    font-size: 30px;
    padding-left: 5%;
  }
`;

export const SubHeading = styled.div`
  font-size: 30px;
  font-weight: 500;
  z-index: 100000;
  position: relative;
  top: -600px;
  padding-left: 20%;
  @media screen and (max-width: 480px) {
    top: -300px;
    font-size: 20px;
    padding-left: 5%;
  }
`;

export const FirstComponent = styled.div`
  background: #00ff00;
  height: 80vh;
  border-bottom-left-radius: 300px;
  @media screen and (max-width: 480px) {
    height: 35vh;
  }
`;
