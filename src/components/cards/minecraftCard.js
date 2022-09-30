import React from "react";
import minecraft from "../img/minecraft-clone.png";
import {
  BtnSection,
  CardStyle,
  ProjectBtn,
  ProjectImg,
  ProjectTitle,
  TextContainer,
  ProjectText,
} from "../styles/cardStyles";

function MinecraftCard() {
  return (
    <CardStyle>
      <ProjectImg src={minecraft} alt="blocks stacked on top of eachother" />
      <TextContainer>
        <ProjectTitle>Minecraft Klone</ProjectTitle>
        <ProjectText>
          Forsøk på å lage spill <br />
          ved hjelp av Three, Nanoid <br />
          og Zustand i React.
          <br /> (Work in progress)
        </ProjectText>
      </TextContainer>
      <BtnSection>
        <ProjectBtn
          href="https://christiansb89.github.io/minecraft-clone/"
          target="_blank"
        >
          Prøv spillet
        </ProjectBtn>
        <ProjectBtn
          href="https://github.com/ChristianSB89/minecraft-clone/tree/master"
          target="_blank"
        >
          Koden på GitHub
        </ProjectBtn>
      </BtnSection>
    </CardStyle>
  );
}

export default MinecraftCard;
