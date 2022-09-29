import {
  FlexContainer,
  HeaderShape,
  HeaderTextContainer,
  Name,
  Profession,
} from "./styles/headerStyle";

function Header() {
  return (
    <HeaderShape>
      <FlexContainer>
        <HeaderTextContainer>
          <Name>Christian Sandum Breivik</Name>
          <Profession>Front end | Grafisk</Profession>
        </HeaderTextContainer>
      </FlexContainer>
    </HeaderShape>
  );
}

export default Header;
