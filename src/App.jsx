import { useState } from "react";
import Background from "./components/Background";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

    const [firstLoad, setFirstLoad] = useState(true); //TODO - Show loader only in first load or refrsh 


    return (
        <div className="App">
            {firstLoad && <Loader state={setFirstLoad}/>}
            <Navbar/>
            <Background/>
            {!firstLoad &&
                <Home/>
            }
            <button onClick={() => console.log(firstLoad)}>test</button>
        </div>
    );
}

export default App;
