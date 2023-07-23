import * as React from 'react';
import './App.css';
import Art from './Components/Art/Art.tsx';
import Crochet from './Components/Crochet/Crochet.tsx';
import Title from './Components/Title/Title.tsx';
import Footer from './Components/Footer/Footer.tsx'
import Navbar from './Components/Navbar/Navbar.tsx';
import Flashsheets from './Components/Flashsheets/Flashsheets.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

    return (

        <Router>
            <Routes>
                <Route path="/" element={
                    <div className="App">
                        <Title />
                        <Navbar />
                        <Art />
                        <Footer />
                    </div>
                } />
                <Route path="" element = {
                    <div className="App">
                        <Title />
                        <Navbar />
                        <Art />
                        <Footer />
                    </div>
                } />
                <Route path="/flashsheets" element={
                    <div>
                        <Title />
                        <Navbar />
                        <Flashsheets />
                        <Footer />
                    </div>
                } />
                <Route path="/crochet" element={
                    <div>
                        <Title />
                        <Navbar />
                        <Crochet />
                        <Footer />
                    </div>
                }
                />
            </Routes>
        </Router>
    );
}

export default App;
