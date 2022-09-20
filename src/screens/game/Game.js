import { useEffect, useState } from "react";
import './game.css'

function Game() {
    const [state, setState] = useState({
        username: '',
        score: 0
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
        <>
            <div className="game-container">
                <div className="score-text">Score: {state.score}</div>
                <div className="shuttle-container">
                    <img className="shuttle pixelart" src={require('../../assets/image/sprite-sheet.png')}></img>
                </div>

            </div>
        </>
    );
}
export default Game