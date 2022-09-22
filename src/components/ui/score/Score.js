import { useState, useEffect, createContext, useCallback } from 'react';
import './score.css'

function Score(props) {

    const [score, setScore] = useState(0);
    let level = 0;

    function checkLevel() {
        if (score > 10)
            level = 1
        if (score > 20)
            level = 2
        if (score > 30)
            level = 3
    }

    useEffect(() => {
        let interval;
        console.log('gameover',props.gameover)
        if (props.gameHasStarted) {
            interval = setInterval(() => {
                setScore(score + 1);
            }, 1000);
        } else {
            checkLevel();
            if (props.gameover) {
                console.log('score da score',score);
                props.callback(score)
            }
}



return () => clearInterval(interval);


    }, [props.gameHasStarted, score]);


return (
    <div className="score-text">Score: {score}</div>

);
}

export default Score