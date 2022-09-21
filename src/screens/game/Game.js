import { useEffect, useState } from "react";
import Score from "../../components/ui/score/Score";
import './game.css'

function Game() {
    const [state, setState] = useState({
        username: '',
        shuttleClass: '',
        shuttleContainerClass:''
    })

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
                <Score/>
                <div className={`shuttle-container ${state.shuttleContainerClass}`}>
                    <img className={`shuttle pixelart ${state.shuttleClass}`} src={require('../../assets/image/sprite-sheet.png')}></img>
                </div>

            </div>
        </>
    );
}
export default Game