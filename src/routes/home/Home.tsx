import HomeAbout from "./homeAbout/HomeAbout";
import HomeDescription from "./homeDescription/HomeDescription";
import HomeHero from "./homeHero/HomeHero";
import HomeServices from "./homeServices/HomeServices";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeDescription />
      <HomeServices />
      <HomeAbout />
    </>
  );
};

export default Home;
