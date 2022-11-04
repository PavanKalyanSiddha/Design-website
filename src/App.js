import React from "react";
import Header from "./Components/Header";
import { Container, FirstComponent, Heading, SubHeading } from "./shared/style";
import DoubleSlash from "../src/Assets/Images/doubleSlash.svg";
import SecondComponent from "./Components/measureToSuccess/SecondComponent";
import ThirdComponent from "./Components/industries/ThirdComponent";

const App = () => {
  return (
    <Container>
      <Header />
      <FirstComponent>
        <img className="doubleSlash" src={DoubleSlash} alt="" />

        <Heading> INNOVATION DIGITAL TECHNOLOGY </Heading>
        <SubHeading>
          {" "}
          everything we do is the consumer, imagination and you.{" "}
        </SubHeading>
      </FirstComponent>
      <SecondComponent />
      <ThirdComponent/>

    </Container>
  );
};

export default App;
