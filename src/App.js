import "./App.css";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import { AppWrapper } from "./components/styles/appStyles";
import Carousel, { CarouselItem } from "./components/carousel";
import DrumsCard from "./components/cards/drumCard";
import MapCard from "./components/cards/mapCard";
import NavCard from "./components/cards/navCard";
import NewsCard from "./components/cards/newCard";
import PortfolioCard from "./components/cards/portfolioCard";
import ToDoCard from "./components/cards/todoCard";
import Footer from "./components/Footer";
import MinecraftCard from "./components/cards/minecraftCard";

function App() {
  return (
    <AppWrapper>
      <Header />
      <AboutMe />
      <Carousel>
        <CarouselItem>
          <DrumsCard />
        </CarouselItem>
        <CarouselItem>
          <MapCard />
        </CarouselItem>
        <CarouselItem>
          <NavCard />
        </CarouselItem>
        <CarouselItem>
          <NewsCard />
        </CarouselItem>
        <CarouselItem>
          <PortfolioCard />
        </CarouselItem>
        <CarouselItem>
          <ToDoCard />
        </CarouselItem>
        <CarouselItem>
          <MinecraftCard />
        </CarouselItem>
      </Carousel>
      <Footer />
    </AppWrapper>
  );
}

export default App;
