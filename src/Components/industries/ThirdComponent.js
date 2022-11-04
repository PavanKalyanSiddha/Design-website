import React from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  GridItem,
} from "../measureToSuccess/style";
import Media from "../../Assets/Images/media.svg";
import HealthCare from "../../Assets/Images/healthCare.svg";
import RealEstate from "../../Assets/Images/realEstate.svg";
import Retail from "../../Assets/Images/retail.svg";
import Education from "../../Assets/Images/education.svg";
import Travel from "../../Assets/Images/travel.svg";
import Telecom from "../../Assets/Images/telecom.svg";
import It from "../../Assets/Images/it.svg";
import Agritech from "../../Assets/Images/agritech.svg";

const ThirdComponent = () => {
  return (
    <Container
      style={{
        background: "#EDEDED",
        color: "black",
      }}
    >
      <div style={{ padding: "20px 0px" }}>
        <Title style={{ padding: "20px 0px", color: "black" }}>
          WE ARE WORKING <br /> WITH THESE INDUSTRIES
        </Title>
      </div>
      <Grid>
        <GridItem>
          <img src={Media} alt="" />
          <Text className="blackText"> MEDIA & ENTERTAINMENT</Text>
        </GridItem>
        <GridItem>
          <img src={HealthCare} alt="" />
          <Text className="blackText"> HEALTH CARE & WELLNESS</Text>
        </GridItem>
        <GridItem>
          <img src={RealEstate} alt="" />
          <Text className="blackText"> HOSPITALITY & REAL ESTATE </Text>
        </GridItem>
        <GridItem>
          <img src={Retail} alt="" />
          <Text className="blackText"> RETAIL & E COMMERCE </Text>
        </GridItem>
        <GridItem>
          <img src={Education} alt="" />
          <Text className="blackText">EDUCATION & LEARNING</Text>
        </GridItem>
        <GridItem>
          <img src={Travel} alt="" />
          <Text className="blackText"> TRAVEL & TRANSPORT</Text>
        </GridItem>
        <GridItem>
          <img src={Telecom} alt="" />
          <Text className="blackText"> MOBILE & TELECOM </Text>
        </GridItem>
        <GridItem>
          <img src={It} alt="" />
          <Text className="blackText"> IT & ITES </Text>
        </GridItem>
        <GridItem>
          <img src={Agritech} alt="" />
          <Text className="blackText"> AGRITECH </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ThirdComponent;
