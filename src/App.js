import "./App.css";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import { AppWrapper } from "./components/styles/appStyles";

function App() {
  return (
    <AppWrapper>
      <Header />
      <AboutMe />
    </AppWrapper>
  );
}

export default App;
