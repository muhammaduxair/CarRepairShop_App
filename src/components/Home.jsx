import { Grid } from "@material-ui/core";
import { Header } from "./Header";
import { Service } from "./Service";
import { Workshop } from "./Workshop";
import { Contact } from "./Contact";
import { ImageSlide } from "./ImageSlide";
import { Footer } from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init({
    once: true,
    duration: 1200,
  });

  return (
    <Grid container className="mainBox">
      <Header />
      <Service />
      <Workshop />
      <Contact />
      <ImageSlide />
      <Footer />
    </Grid>
  );
};
export default Home;
