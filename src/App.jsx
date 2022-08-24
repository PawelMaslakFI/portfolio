import Background from "./components/Background";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Loader/>
            <Navbar/>
            <Background/>

            <Home/>
        </div>
    );
}

export default App;
