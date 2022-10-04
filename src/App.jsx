import { useState } from 'react';
import Background from './components/Background';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {

    const [firstLoad, setFirstLoad] = useState(true); //TODO - Show loader only in first load or refrsh 

    const location = useLocation();

    return (
        <div className='App'>
            {firstLoad && <Loader state={setFirstLoad} />}
            <Navbar />
            <Background />
            {!firstLoad &&
                <AnimatePresence>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            }
        </div>
    );
}

export default App;
