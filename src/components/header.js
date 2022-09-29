import {
  FlexContainer,
  HeaderShape,
  HeaderTextContainer,
  IconWrapper,
  Name,
  Profession,
} from "./styles/headerStyle";
import { StyledGit, StyledLinked, StyledTwitter } from "./styles/iconStyles";

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
        <StyledGit>
          <a></a>
        </StyledGit>
        <StyledLinked>
          <a></a>
        </StyledLinked>
        <StyledTwitter>
          <a></a>
        </StyledTwitter>
      </IconWrapper>
    </HeaderShape>
  );
}

export default Header;
