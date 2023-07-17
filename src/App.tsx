import * as React from 'react'
import ReactDOM from 'react-dom';
import './App.css';
//@ts-ignore
import Art from './Components/Art/Art.tsx';
//@ts-ignore
import Title from './Components/Title/Title.tsx';

function App() {
    return (
        <>
            <Title></Title>
            <Art></Art>
        </>
    )
}

export default App;
