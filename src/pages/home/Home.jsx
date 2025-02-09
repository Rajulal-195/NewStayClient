import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import Headers from "../../components/header/Headers";
import Carousel from "../../components/header/Carousel";

const Home = () => {
  return (
    <div>
      <Headers/>
      <Header/>
      <Carousel/>
      <div className="homeContainer">
        <h3 className="comp ">BROWSE BY LOCATION </h3>
        <Featured/>
        <h3 className="comp">BROWSE BY PROPERTY TYPE</h3>
        <PropertyList/>
        <h3 className="comp">STAY GUESTS LOVE</h3>
        <FeaturedProperties/>
      </div>
        <MailList/>
        <Footer/>
    </div>
  );
};

export default Home;
