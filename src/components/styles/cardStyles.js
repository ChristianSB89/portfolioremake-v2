import styled from "styled-components";

export const CardStyle = styled.section`
  margin: 0 0.5em;
  padding: 1em;
  text-align: center;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

// Image and iFrame styling (card)

export const ProjectImg = styled.img`
  width: 15em;
  margin-top: 0.5em;
  border-radius: 16px;
`;

export const ProjectFrame = styled.iframe`
  width: 15em;
  height: 15em;
  margin-top: 0.5em;
  border-radius: 16px;
`;

// Project links (buttons in card)

export const ProjectBtn = styled.a`
  text-decoration: none;
  color: #0a323b;
  background: rgba(255, 255, 255, 0.2);
  margin: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  &:hover {
    color: #82c0cc;
    background: rgba(255, 255, 255, 0.27);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
`;

export const BtnSection = styled.section`
  display: flex;
  justify-content: space-evenly;
`;
