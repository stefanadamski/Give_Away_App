import ThreeColumns from "./ThreeColumns/ThreeColumns";
import Contact from "./Contact/Contact";
import AboutUs from "./AboutUs/AboutUs";
import Header from "./Hearder/Header";
import EasySteps from "./EasySteps/EasySteps";
import Help from "./Help/Help";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import './Home.scss';

function Home() {
    return (
        <div className="homeContainer">
            <Navigation/>
            <Menu/>
            <Header/>
            <ThreeColumns/>
            <EasySteps/>
            <AboutUs/>
            <Help/>
            <Contact/>
            <Footer> </Footer>
        </div>
    );
}

export default Home;