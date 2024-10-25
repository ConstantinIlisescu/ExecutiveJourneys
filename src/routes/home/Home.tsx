import HomeAbout from "./homeAbout/HomeAbout";
import HomeDescription from "./homeDescription/HomeDescription";
import Footer from "./homeFooter/Footer";
import HomeHero from "./homeHero/HomeHero";
import HomeServices from "./homeServices/HomeServices";
import Fleet from "./homeFleet/Fleet";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeDescription />
      <HomeServices />
      <Fleet/>
      <HomeAbout />
      <Footer />
    </>
  );
};

export default Home;
