import React from "react";
import portfolio from "../img/portfolio.png";
import {
  CardStyle,
  ProjectBtn,
  ProjectTitle,
  TextContainer,
  ProjectText,
  ProjectImg,
} from "../styles/cardStyles";

function PortfolioCard() {
  return (
    <CardStyle>
      <ProjectImg src={portfolio} />
      <TextContainer>
        <ProjectTitle>Design for denne siden</ProjectTitle>
        <ProjectText>
          Denne nettsiden ble <br />
          designet i Figma. <br />
          Her kan du se prosessen.
        </ProjectText>
      </TextContainer>
      <ProjectBtn
        href="https://www.figma.com/file/hnixYAjWAbIXgdrQr3vE79/portfolio-wireframe?node-id=72%3A680"
        target="_blank"
      >
        Se filen her
      </ProjectBtn>
    </CardStyle>
  );
}

export default PortfolioCard;
