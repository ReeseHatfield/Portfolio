import * as React from 'react'
import './Log.css';

type Props = {
    commands: string[];
    handleDirClick: (directory: string) => void;
    readme: string | null;
    repos: any[];
}

const Log: React.FC<Props> = ({ commands, handleDirClick, readme, repos }) => {
    return (
        <div className="Log">
            {commands.map((command, index) => (
                <p key={index}>{command}</p>
            ))}
            {commands.includes('ls') && repos.map((repo, index) => (
                <p key={index} onClick={() => handleDirClick(repo.name)}>{repo.name}</p>
            ))}
            {readme && (
                <div>
                    <h2>Readme:</h2>
                    <p>{readme}</p>
                </div>
            )}
        </div>
    );
}

export default Log;
