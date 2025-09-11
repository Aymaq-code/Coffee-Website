import AboutPagePart1 from "../components/AboutPagePart1";
import AboutPagePart2 from "../components/AboutPagePart2";
import AboutPagePart3 from "../components/AboutPagePart3";
import AboutPagePart4 from "../components/AboutPagePart4";
import AboutHead from "../layouts/AboutHead";
import Footer from "../layouts/Footer";

export default function About() {
  return (
    <>
      <AboutHead />
      <AboutPagePart1 />
      <AboutPagePart2 />
      <AboutPagePart3 />
      <AboutPagePart4 />
      <Footer />
    </>
  );
}
