import React from "react";
import {
  FlexContainer,
  BodyContainer,
  LeftGridContainer,
  PrimaryButton,
  RightGridContainer,
  SecondaryButton,
  FooterContainer,
  MiddleContainer,
} from "./Style";
import { HeaderContainer } from "./Style";
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <FlexContainer>
          <LeftGridContainer>
            <div>
              <b
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                DESIGN{" "}
              </b>{" "}
              <br></br> AGENCY
            </div>
            <span>Specialize in </span>
            <span> Case Study </span>
            <span>Process</span>
            <span> Industries</span>
          </LeftGridContainer>

          <RightGridContainer>
            <PrimaryButton>Schedule A Call</PrimaryButton>
            <SecondaryButton>We are Hiring</SecondaryButton>
          </RightGridContainer>
        </FlexContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
