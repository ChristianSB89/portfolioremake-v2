import styled from "styled-components";

export const AboutMeWrapper = styled.section`
  margin: 0.5em 0;
  padding: 5em 0;
  background: linear-gradient(
    180deg,
    rgba(77, 132, 143, 0) 0%,
    rgba(77, 132, 143, 0.791667) 33.33%,
    #4d848f 66.67%,
    rgba(77, 132, 143, 0) 100%
  );
  border-radius: 0 0 1em 1em;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const AboutFlexBkgd = styled.section`
  margin: 0;
  padding: 0.5em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const ImageStyle = styled.img`
  margin: 1.2em 0;
  border-radius: 1em;
  width: 5em;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
`;

export const TextFlex = styled.section`
  margin: 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutText = styled.p`
  color: #4d848f;
  margin: 0.3em;
  font-weight: 500;
  max-width: 40em;
  border-radius: 1em;
`;
