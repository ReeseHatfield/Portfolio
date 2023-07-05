import * as React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
//@ts-ignore
import Log from "./Components/Log/Log.tsx";
//@ts-ignore
import CurrentDir from "./Components/CurrentDir/CurrentDir.tsx";
//@ts-ignore
import InputBox from "./Components/InputBox/InputBox.tsx";

function App() {
    const baseDir = 'reesehatfield.github.io/Portfolio';
    const [currentDir, setCurrentDir] = useState<string>(baseDir);
    const [commands, setCommands] = useState<string[]>(['ls']);
    const [repos, setRepos] = useState<any[]>([]);
    const [readme, setReadme] = useState<string | null>(null);

    const fetchRepos = async () => {
        try {
            const response = await fetch('https://api.github.com/users/reesehatfield/repos');
            const data = await response.json();
            setRepos(data);
        } catch (error) {
            console.error('Failed to fetch repositories:', error);
        }
    };

    const fetchReadme = async (repo: string) => {
        try {
            const response = await fetch(`https://api.github.com/repos/reesehatfield/${repo}/readme`);
            const data = await response.json();
            const readmeContent = atob(data.content);
            setReadme(readmeContent);
        } catch (error) {
            console.error('Failed to fetch readme:', error);
        }
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    const handleDirClick = (directory: string) => {
        const newCommands = [...commands];
        newCommands.push(`cd ${directory}`);
        setCommands(newCommands);

        fetchReadme(directory);
    };

    return (
        <div className="App">
            <Log commands={commands} handleDirClick={handleDirClick} readme={readme} repos={repos} />
            <CurrentDir currentDir={currentDir} />
        </div>
    );
}

export default App;
