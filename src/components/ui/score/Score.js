import { useState, useEffect } from 'react';
import './score.css'

function Score() {
    const [state, setState] = useState({
        score:0
    })
    let actualScore = 0

    useEffect(() => {
        const interval = setInterval(() => {
            actualScore = actualScore + 1
            setState({
                ...state,
                score: actualScore
            })
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="score-text">Score: {state.score}</div>
    );
}

export default Score