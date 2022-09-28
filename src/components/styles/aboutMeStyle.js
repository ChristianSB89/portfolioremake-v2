import styled from "styled-components";

export const AboutMeWrapper = styled.section`
  margin: 0.5em 0;
  padding: 5em 1.5em;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 50%);
  border-radius: 1em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const TextBackground = styled.section`
  margin: 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 50%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const AboutText = styled.p`
  color: #4d848f;
  font-weight: 500;
  max-width: 40em;
  border-radius: 1em;
`;
