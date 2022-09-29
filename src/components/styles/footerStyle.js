import styled from "styled-components";

export const FooterWrapper = styled.footer`
  text-align: center;
  margin: 0 0 0.5em 0;
  padding: 0.5em 0;
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

export const TextBkgd = styled.section`
  margin: 1em 0;
  padding: 0.5em 0;
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

export const FooterText = styled.p`
  color: #0f3c45;
`;
