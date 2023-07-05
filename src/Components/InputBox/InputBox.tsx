import * as React from 'react'
import './InputBox.css';

type Props = {
    selectedRepo: string | null;
}

const InputBox: React.FC<Props> = ({ selectedRepo }) => {
    return (
        <div className="InputBox">
            {selectedRepo ? (
                <p>Selected repository: {selectedRepo}</p>
            ) : (
                <p>Type a command...</p>
            )}
        </div>
    )

}

export default InputBox