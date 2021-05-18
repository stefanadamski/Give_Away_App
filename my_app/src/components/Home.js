import logo from "../assets/Form-Hero-Image.jpg";
import ThreeColumns from "./home_components/ThreeColumns";
import Contact from "./home_components/Contact";
import AboutUs from "./home_components/AboutUs";
import '../scss/home.scss';
import Login from "./Login";

function Home() {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = window.location.origin + "/login";
    }
    return (
        <div className="home_container">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={(e) => handleClick(e)}> Login </button>
            </header>
            <AboutUs/>
            <Contact/>
            <Login/>
            <ThreeColumns/>
        </div>
    );
}

export default Home;