import {
  FlexContainer,
  HeaderShape,
  HeaderTextContainer,
  ImageStyle,
  Name,
  Profession,
} from "./styles/headerStyle";
import profile from "./img/profile.jpg";

function Header() {
  return (
    <HeaderShape>
      <FlexContainer>
        <ImageStyle src={profile} alt="Christian looking to the side smiling" />
        <HeaderTextContainer>
          <Name>Christian Sandum Breivik</Name>
          <Profession>Front end | Grafisk</Profession>
        </HeaderTextContainer>
      </FlexContainer>
    </HeaderShape>
  );
}

export default Header;
