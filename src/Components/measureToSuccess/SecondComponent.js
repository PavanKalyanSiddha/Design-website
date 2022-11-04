import React from "react";
import { FlexContainer, MiddleContainer } from "../Style";
import { Container, Title, Text, Grid, GridItem } from "./style";
import Rectangle from "../../Assets/Images/rectangle.svg";
import Timer from "../../Assets/Images/timeInterval.svg";
import CircularSpot from "../../Assets/Images/circularSpot.svg";
import HalfRectangle from "../../Assets/Images/halfRectangule.svg";
import RectanglarSpot from "../../Assets/Images/rectangularSpot.svg";
import Rotated from "../../Assets/Images/rotatedRectangule.svg";
import RotatedRectangularSpot from "../../Assets/Images/rotatedRectangularSpot.svg";
import Triangle from "../../Assets/Images/triangular.svg";

const SecondComponent = () => {
  return (
    <Container style={{ marginTop: "100px" }}>
      <div style={{ padding: "20px 0px" }}>
        <Title>
          MEASUREMENT <br /> TO OUR SUCCESS
        </Title>
        <Text> Our process-driven approach keeps us going </Text>
      </div>
      <Grid>
        <GridItem>
          <img src={Rectangle} alt="" />
          <Text> TRANSPARENCY AND RELIABILITY </Text>
        </GridItem>
        <GridItem>
          <img src={Timer} alt="" />
          <Text> REAL TIME PROJECT STATUS </Text>
        </GridItem>
        <GridItem>
          <img src={CircularSpot} alt="" />
          <Text> WELL STRUCTURED COMMUNICATION </Text>
        </GridItem>
        <GridItem>
          <img src={HalfRectangle} alt="" />
          <Text> AGILE METHODOLOGY </Text>
        </GridItem>
        <GridItem>
          <img src={RectanglarSpot} alt="" />
          <Text> ONSITE COLLABORATION </Text>
        </GridItem>
        <GridItem>
          <img src={Triangle} alt="" />
          <Text> INNOVATION AT WORK </Text>
        </GridItem>
        <GridItem>
          <img src={Rotated} alt="" />
          <Text> CLIENT'S INVOLVEMENT IN EACH MILESTONE </Text>
        </GridItem>
        <GridItem>
          <img src={RotatedRectangularSpot} alt="" />
          <Text> DEDICATED TEAM </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default SecondComponent;
