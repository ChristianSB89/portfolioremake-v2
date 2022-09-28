import {
  AboutMeWrapper,
  AboutText,
  TextBackground,
} from "./styles/aboutMeStyle";

function AboutMe() {
  return (
    <AboutMeWrapper>
      <TextBackground>
        <AboutText>
          Heisann, jeg er PC entusiast og tech nerd. Under belte har jeg
          kunnskap om HTML, CSS, JavaScript, React, Photoshop, Illustrator,
          Blender og Figma.
        </AboutText>
        <AboutText>
          Jeg har alltid vært nysgjerrig på koding og har prøvd meg litt i
          Python. Etter mange timer med modifisering av spill og feilsøking i
          konsoll så fant jeg ut at det var dette jeg ville gjøre.
        </AboutText>
      </TextBackground>
    </AboutMeWrapper>
  );
}

export default AboutMe;
