import ThreeColumns from "./ThreeColumns/ThreeColumns";
import Contact from "./Contact/Contact";
import AboutUs from "./AboutUs/AboutUs";
import Header from "./Hearder/Header";
import EasySteps from "./EasySteps/EasySteps";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import Pagination from "./Help/Pagination";

function Home() {
    return (
        <div>
            <Navigation/>
            <Menu/>
            <Header/>
            <ThreeColumns/>
            <EasySteps/>
            <AboutUs/>
            <Pagination/>
            <Contact/>
            <Footer> </Footer>
        </div>
    );
}

export default Home;