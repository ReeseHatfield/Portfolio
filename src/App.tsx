import * as React from 'react';
import './App.css';
import Art from './Components/Art/Art.tsx';
import Title from './Components/Title/Title.tsx';

function App() {
    return (
        <div className="App">
            <Title />
            <Art />
        </div>
    );
}

export default App;
