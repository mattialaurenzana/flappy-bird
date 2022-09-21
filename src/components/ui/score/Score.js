import { useState, useEffect } from 'react';
import './score.css'

function Score(props) {

    console.log(props);
 
    const [score,setScore] = useState(0);



    useEffect(() => {
        let interval ;
        if(props.gameHasStarted){

            interval = setInterval(() => {
            
               setScore(score + 1);
            }, 1000);
        }else{
            setScore(0)
        }

        return () => clearInterval(interval);
 
        
    },[props.gameHasStarted,score]);


    return (
        <div className="score-text">Score: {score}</div>
    );
}

export default Score