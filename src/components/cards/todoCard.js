import React from "react";
import ToDo from "../img/to-doList.png";
import {
  CardStyle,
  ProjectBtn,
  ProjectImg,
  BtnSection,
  TextContainer,
  ProjectTitle,
  ProjectText,
} from "../styles/cardStyles";

function ToDoCard() {
  return (
    <CardStyle>
      <ProjectImg src={ToDo} alt="An online to do list" />
      <TextContainer>
        <ProjectTitle>To-do list</ProjectTitle>
        <ProjectText>
          Blant de første <br />
          JavaScript prosjektene. <br />
          Her skal man kunne <br />
          sortere og fjerne ting.
        </ProjectText>
      </TextContainer>
      <BtnSection>
        <ProjectBtn
          href="https://christiansb89.github.io/todo-list/"
          target="_blank"
        >
          Prøv det her
        </ProjectBtn>
        <ProjectBtn
          href="https://github.com/ChristianSB89/todo-list"
          target="_blank"
        >
          Koden på GitHub
        </ProjectBtn>
      </BtnSection>
    </CardStyle>
  );
}

export default ToDoCard;
