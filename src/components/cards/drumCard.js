import React from "react";
import drumkit from "../img/drumkit.png";
import {
  CardStyle,
  ProjectBtn,
  ProjectImg,
  BtnSection,
  ProjectTitle,
  ProjectText,
  TextContainer,
} from "../styles/cardStyles";

function DrumsCard() {
  return (
    <CardStyle>
      <ProjectImg
        src={drumkit}
        alt="Circles representing drumpads with my own drumkit in the background"
      />
      <TextContainer>
        <ProjectTitle>Trommer i JavaScript</ProjectTitle>
        <ProjectText>
          Trommesett lagd i JavaScript,
          <br /> der man kan trykke med både <br />
          musemarkøren og tastaturet.
        </ProjectText>
      </TextContainer>
      <BtnSection>
        <ProjectBtn
          href="https://christiansb89.github.io/drumkit-javascript/"
          target="_blank"
        >
          Prøv trommer her
        </ProjectBtn>
        <ProjectBtn
          href="https://github.com/ChristianSB89/drumkit-javascript"
          target="_blank"
        >
          Koden på GitHub
        </ProjectBtn>
      </BtnSection>
    </CardStyle>
  );
}

export default DrumsCard;
