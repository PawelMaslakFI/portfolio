import Background from "./components/Background";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Loader/>
            <Navbar/>
            <Background/>
        </div>
    );
}

export default App;
