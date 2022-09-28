import styled from "styled-components";

export const AboutMeWrapper = styled.section`
  margin: 0.5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 1.5em;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 50%);
  border-radius: 1em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const AboutText = styled.p`
  font-weight: 400;
  max-width: 40em;
`;
