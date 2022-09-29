import styled from "styled-components";

export const FooterWrapper = styled.footer`
  text-align: center;
  margin: 0 0 0.5em 0;
  padding: 0.5em 0;
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

export const TextBkgd = styled.section`
  margin: 1em 0;
  padding: 0.5em 0;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const FooterText = styled.p`
  color: #0f3c45;
`;
