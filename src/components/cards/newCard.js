import React from "react";
import dolingen from "../img/dolingen_thumb.png";
import {
  BtnSection,
  CardStyle,
  ProjectBtn,
  ProjectImg,
  ProjectText,
  ProjectTitle,
  TextContainer,
} from "../styles/cardStyles";

function NewsCard() {
  return (
    <CardStyle>
      <ProjectImg src={dolingen} alt="A fictional news site" />
      <TextContainer>
        <ProjectTitle>Dølingen</ProjectTitle>
        <ProjectText>
          Første forsøk på Html og CSS. <br />
          Her har jeg bare prøvd meg <br />
          fram i HTML og CSS.
        </ProjectText>
      </TextContainer>
      <BtnSection>
        <ProjectBtn
          href="https://christiansb89.github.io/Dolingen/"
          target="_blank"
        >
          Se hele siden
        </ProjectBtn>
        <ProjectBtn
          href="https://github.com/ChristianSB89/Dolingen"
          target="_blank"
        >
          Koden på GitHub
        </ProjectBtn>
      </BtnSection>
    </CardStyle>
  );
}

export default NewsCard;
