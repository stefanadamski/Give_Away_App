import logo from "../images/Form-Hero-Image.jpg";
import '../css/Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Oddam w dobre ręce
                </a>
            </header>
        </div>
    );
}

export default Home;