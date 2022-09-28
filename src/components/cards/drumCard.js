import React from "react";
import drumkit from "../img/drumkit.png";
import {
  CardStyle,
  ProjectBtn,
  ProjectImg,
  BtnSection,
} from "../styles/cardStyles";

function DrumsCard() {
  return (
    <CardStyle>
      <ProjectImg
        src={drumkit}
        alt="Circles representing drumpads with my own drumkit in the background"
      />
      <section>
        <h2>Trommer i JavaScript</h2>
        <p>
          Trommesett lagd i JavaScript, der man kan trykke både med musemarkøren
          og med tastaturet.
        </p>
      </section>
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
