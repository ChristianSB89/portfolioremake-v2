import React from "react";
import map from "../img/map.png";
import {
  BtnSection,
  CardStyle,
  ProjectBtn,
  ProjectImg,
  ProjectTitle,
  TextContainer,
  ProjectText,
} from "../styles/cardStyles";

function MapCard() {
  return (
    <CardStyle>
      <ProjectImg src={map} alt="A map" />
      <TextContainer>
        <ProjectTitle>Kart API</ProjectTitle>
        <ProjectText>
          Hentet kart API fra <br />
          <a href="https://leafletjs.com/">leafletjs.com</a> <br />
          for å lære om henting av API.
        </ProjectText>
      </TextContainer>
      <BtnSection>
        <ProjectBtn
          href="https://christiansb89.github.io/Map-Test/"
          target="_blank"
        >
          Gå til kartet
        </ProjectBtn>
        <ProjectBtn
          href="https://github.com/ChristianSB89/Map-Test"
          target="_blank"
        >
          Koden på GitHub
        </ProjectBtn>
      </BtnSection>
    </CardStyle>
  );
}

export default MapCard;
