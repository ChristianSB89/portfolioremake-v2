import {
  FlexContainer,
  HeaderShape,
  HeaderTextContainer,
  IconWrapper,
  Name,
  Profession,
} from "./styles/headerStyle";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Header() {
  return (
    <HeaderShape>
      <FlexContainer>
        <HeaderTextContainer>
          <Name>Christian Sandum Breivik</Name>
          <Profession>Front end | Grafisk</Profession>
        </HeaderTextContainer>
      </FlexContainer>
      <IconWrapper>
        <a href="https://github.com/ChristianSB89" target="_blank">
          <BsGithub color="white" size={40} opacity="80%" />
        </a>

        <a href="https://www.linkedin.com/in/chris-sabre/" target="_blank">
          <FaLinkedin color="white" size={40} opacity="80%" />
        </a>
        <a href="https://twitter.com/chrissanbrei" target="_blank">
          <BsTwitter color="white" size={40} opacity="80%" />
        </a>
      </IconWrapper>
    </HeaderShape>
  );
}

export default Header;
