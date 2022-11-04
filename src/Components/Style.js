import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 20px 0px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  background: #00ff00;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // padding: 10px 20px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  color: white;
  background: black 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 20px #00000029;
  border-radius: 33px;
  opacity: 1;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
`;

export const SecondaryButton = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 20px #00000029;
  border-radius: 33px;
  opacity: 1;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
`;

export const RightGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 0px 20px;
  @media screen and (max-width: 480px) {
    padding: 10px 20px;
  }
`;
export const LeftGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  padding: 0px 20px;
  align-items: center;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 10px 0px;
  }

`;

export const MiddleContainer = styled.div`
    display: grid;
    grid-template-columns : repeat(8, 1fr);
    grid-gap: 20px;
    padding: 20px;
    text-alignment: center;
    background: black;
`;
export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns : repeat(9, 1fr);
    grid-gap: 20px;
    padding: 20px;
    text-alignment: center;
    background: grey;
`;