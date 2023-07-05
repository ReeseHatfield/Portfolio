import * as React from 'react'
import './CurrentDir.css';

type Props = {
    currentDir: string;
}

const CurrentDir: React.FC<Props> = ({ currentDir }) => {
    return (
        <div className="CurrentDir">
            <p>{currentDir}</p>
        </div>
    );
}

export default CurrentDir;
