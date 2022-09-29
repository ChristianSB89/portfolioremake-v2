import React from "react";
import { FooterText, FooterWrapper, TextBkgd } from "./styles/footerStyle";

function Footer() {
  return (
    <FooterWrapper>
      <TextBkgd>
        <FooterText>
          Copyright © 2022 <br />
          Christian Sandum Breivik
        </FooterText>
      </TextBkgd>
    </FooterWrapper>
  );
}

export default Footer;
