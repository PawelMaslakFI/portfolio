import { useState } from "react";
import Background from "./components/Background";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    } from "react-router-dom";


function App() {

    const [firstLoad, setFirstLoad] = useState(true); //TODO - Show loader only in first load or refrsh 


    return (
        <div className="App">
            <Router>
                {firstLoad && <Loader state={setFirstLoad} />}
                <Navbar />
                <Background />
                {!firstLoad &&
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                    </Routes>
                }
            </Router>
        </div>
    );
}

export default App;
