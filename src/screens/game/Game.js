import { useEffect, useState } from "react";
import './game.css'
import eventsBus from '../../events/eventsBus'

function Game() {
    const [state, setState] = useState({
        username: '',
        score: 0,
        shuttleClass: '',
        shuttleContainerClass:''
    })
    let actualScore = 0



    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         actualScore = actualScore + 1
    //         setState({
    //             ...state,
    //             score: actualScore
    //         })
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    function jumpShuttle(){
        setState({
            ...state,
            shuttleContainerClass: 'jump',
            shuttleClass: 'jump-shuttle'
        })
    }


    return (
        <>
            <div className="game-container" onClick={jumpShuttle}>
                <div className="score-text">Score: {state.score}</div>
                <div className={`shuttle-container ${state.shuttleContainerClass}`}>
                    <img className={`shuttle pixelart ${state.shuttleClass}`} src={require('../../assets/image/sprite-sheet.png')}></img>
                </div>

            </div>
        </>
    );
}
export default Game