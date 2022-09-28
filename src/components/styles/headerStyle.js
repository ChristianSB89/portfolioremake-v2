import styled from "styled-components";

export const HeaderShape = styled.section`
  margin: 0 0 0.5em 0;
  padding: 2em 0;
  background: linear-gradient(
    180deg,
    rgba(77, 132, 143, 0.1) 0%,
    rgba(77, 132, 143, 0.791667) 33.33%,
    #4d848f 66.67%,
    rgba(77, 132, 143, 0.1) 100%
  );
  border-radius: 0 0 1em 1em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const FlexContainer = styled.section`
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const ImageStyle = styled.img`
  border-radius: 1em;
  width: 5em;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const HeaderTextContainer = styled.section`
  color: #4d848f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  padding: 0;
`;

export const Name = styled.h2`
  font-size: 1.5em;
  padding: 0;
  margin: 0;
`;
export const Profession = styled.h3`
  color: #4d848f;
  font-size: 1.5em;
  padding: 0;
  margin: 0;
`;
