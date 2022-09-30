import {
  AboutFlexBkgd,
  AboutMeWrapper,
  AboutText,
  TextFlex,
} from "./styles/aboutMeStyle";
import { ImageStyle } from "./styles/aboutMeStyle";
import profile from "./img/profile.png";

function AboutMe() {
  return (
    <AboutMeWrapper>
      <AboutFlexBkgd>
        <ImageStyle src={profile} alt="Christian looking to the side smiling" />
        <TextFlex>
          <AboutText>
            Heisann, jeg er PC entusiast og tech nerd. Under belte har jeg
            kunnskap om HTML, CSS, JavaScript, React, Photoshop, Illustrator,
            Blender og Figma.
          </AboutText>
          <AboutText>
            Jeg har alltid vært nysgjerrig på koding og har prøvd meg litt i
            Python. Etter mange timer med modifisering av spill og feilsøking i
            konsoll så fant jeg ut at det var koding jeg ville gjøre.
          </AboutText>
          <AboutText>
            Har vært gamer siden Super Nintendo kom til Norge i 1992. Jeg har
            vært borti mange konsoller og ble tidlig PC-gamer. Denne hobbyen har
            fulgt meg hele livet. Er også veldig glad i grafisk design og har
            noe utdanning innen faget.
          </AboutText>
          <AboutText>
            Jobber også en del med 3D modellering, tegner, animerer og lager
            video grafikk. Jeg har blant annet laget logoer til band og gamere.
            En annen ting som har fulgt meg gjennom livet er musikk. Jeg er
            trommeslager og lager musikk på PC med diverse programvarer.
          </AboutText>
        </TextFlex>
      </AboutFlexBkgd>
    </AboutMeWrapper>
  );
}

export default AboutMe;
