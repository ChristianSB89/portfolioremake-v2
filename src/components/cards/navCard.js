import React from "react";
import navApp from "../img/nav-app.png";
import {
  CardStyle,
  ProjectBtn,
  ProjectImg,
  ProjectText,
  ProjectTitle,
  TextContainer,
} from "../styles/cardStyles";

function NavCard() {
  return (
    <CardStyle>
      <ProjectImg src={navApp} />
      <TextContainer>
        <ProjectTitle>Workshop Prosjekt - Nav</ProjectTitle>
        <ProjectText>
          Gruppeprosjekt der vi skulle <br />
          finne en bedre løsning for Nav. <br />
          Jeg stod for design i Figma.
        </ProjectText>
      </TextContainer>
      <ProjectBtn
        href="https://www.figma.com/file/o0Kyv62TbP5EhmOE9XqAo0/NAV-app?node-id=0%3A1"
        target="_blank"
      >
        Se hele prosjektet
      </ProjectBtn>
    </CardStyle>
  );
}

export default NavCard;
