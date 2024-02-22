import "./App.css";
// Import Layouts
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
// Import Pages
import Hero from "./pages/Hero/Hero";
import Partners from "./pages/Partners/Partners";
import HelloThere from "./pages/Hello-there/HelloThere";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Testimonial from "./pages/Testimonial/Testimonial";
import ContactUs from "./pages/Contact-us/ContactUs";
import OurBlog from "./pages/Our-Blog/OurBlog";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Header />
      <Helmet>
        <title>Imah </title>
        <meta name="description" content="Imah is an architecture company" />
      </Helmet>
      <Hero />
      <div className="container">
        <Partners />
        <HelloThere />
        <Services />
        <Projects />
        <Testimonial />
        <ContactUs />
        <OurBlog />
      </div>
      <Footer />
    </>
  );
}

export default App;
