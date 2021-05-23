import ThreeColumns from "./homeComponents/ThreeColumns/ThreeColumns";
import Contact from "./homeComponents/Contact/Contact";
import AboutUs from "./homeComponents/AboutUs/AboutUs";
import Login from "./Login";
import Header from "./Header";
import EasySteps from "./homeComponents/EasySteps/EasySteps";
import Help from "./homeComponents/Help/Help";
import '../scss/Home.scss';

function Home() {
    return (
        <div className="homeContainer">
            <Header/>
            <ThreeColumns/>
            <EasySteps/>
            <AboutUs/>
            <Help/>
            <Contact/>
            <Login/>
            <footer> </footer>
        </div>
    );
}

export default Home;