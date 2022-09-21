import { useState, useEffect } from 'react';
import './score.css'

function Score(props) {
 
    const [score,setScore] = useState(0);
    


    useEffect(() => {
        let interval ;
        if(props.gameHasStarted){
            interval = setInterval(() => {
            
               setScore(score + 1);
            }, 1000);
        }
 
        return () => clearInterval(interval);
    });


    return (
        <div className="score-text">Score: {score}</div>
    );
}

export default Score