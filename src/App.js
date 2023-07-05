import './App.css';
import Log from "./Components/Log/Log.tsx";
import CurrentDir from "./Components/CurrentDir/CurrentDir.tsx";
import InputBox from "./Components/InputBox/InputBox.tsx";

function App() {

  return (
    <div className="App">
        <Log></Log>
        <CurrentDir></CurrentDir>
        <InputBox></InputBox>
    </div>
  );
}

export default App;
