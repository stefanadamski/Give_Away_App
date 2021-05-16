import logo from "../assets/Form-Hero-Image.jpg";
import ThreeColumns from "./home_components/ThreeColumns";
import Contact from "./home_components/Contact";
import '../scss/home.scss';


function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Oddam w dobre ręce
                </a>
            </header>
            <Contact/>
            <ThreeColumns/>
        </div>
    );
}

export default Home;