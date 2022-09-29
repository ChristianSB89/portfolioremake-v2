import React from "react";
import {
  CardStyle,
  ProjectBtn,
  ProjectFrame,
  ProjectTitle,
  TextContainer,
  ProjectText,
} from "../styles/cardStyles";

function PortfolioCard() {
  return (
    <CardStyle>
      <ProjectFrame
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FhnixYAjWAbIXgdrQr3vE79%2Fportfolio-wireframe%3Fnode-id%3D72%253A680"
        allowfullscreen
      ></ProjectFrame>
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
