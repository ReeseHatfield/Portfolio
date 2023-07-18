import * as React from 'react';
import './App.css';
import Art from './Components/Art/Art.tsx';
import Title from './Components/Title/Title.tsx';
import Footer from './Components/Footer/Footer.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


    return (

        <Router>
            <Routes>
                <Route path="*" element = {
                    <div className="App">
                        <Title />
                        <Art />
                        <Footer />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
