import { useEffect, useState } from "react";
import Score from "../../components/ui/score/Score";
import Shuttle from "../../components/ui/shuttle/Shuttle";
import Pillar from "../../components/ui/pillar/Pillar";
import './game.css'

function Game() {


    const GAME_HEIGHT = 500;
    const GAME_WIDTH = 350;
    const SHUTTLE_SIZE = 80;
    const JUMP_HEIGHT = 100;
    const GRAVITY = 6;
    const PILLAR_WIDTH = 40;
    const PILLAR_GAP = 150;


    const [pillarHeight,setPillarHeight] = useState(200);


    const [state, setState] = useState({
        username: '',
        shuttlePosition : 250,
        gameHasStarted : false,
        pillarLeft : GAME_WIDTH - PILLAR_WIDTH,
        bottomPillarHeight : GAME_HEIGHT - PILLAR_GAP - pillarHeight,
        // shuttleClass: '',
        // shuttleContainerClass:''
    })

    useEffect(()=>{
        let shuttleId;
        if(state.gameHasStarted && state.shuttlePosition < GAME_HEIGHT - SHUTTLE_SIZE){
            shuttleId = setInterval(()=>{
                setState({
                    ...state,
                    shuttlePosition : state.shuttlePosition + GRAVITY
                })

            },24)
        }
        return()=>{
            clearInterval(shuttleId);
        }
    },[state.shuttlePosition,state.gameHasStarted])


    useEffect(()=>{
        let pillarId;
        if(state.gameHasStarted && state.pillarLeft >= -PILLAR_WIDTH){
            pillarId = setInterval(()=>{
                setState({
                    ...state,
                    pillarLeft : state.pillarLeft - 5,
                })

            },24)

            return ()=>{
                clearInterval(pillarId);
            }
        }
    })

    const handleClick = () =>{
        let newShuttlePosition = state.shuttlePosition - JUMP_HEIGHT;

        if(!state.gameHasStarted){
           setState({
            ...state,
            gameHasStarted : true
           })
        }else if(newShuttlePosition < 0){
            setState({
                ...state,
                shuttlePosition : 0
            })
        }else{
            setState({
                ...state,
                shuttlePosition : newShuttlePosition
            })
        }
    }

    // function jumpShuttle(){
    //     setState({
    //         ...state,
    //         // shuttleContainerClass: 'jump',
    //         // shuttleClass: 'jump-shuttle'
    //     })
    // }


    return (
        <>
            <div className="game-container" onClick={handleClick}>
                <Score/>

                <div className="game-box">
                    <Pillar 
                        top={0}
                        width={PILLAR_WIDTH}
                        height={pillarHeight}
                        left={state.pillarLeft}
                    
                    />
                    <Pillar 
                        top={GAME_HEIGHT - (pillarHeight + state.bottomPillarHeight)}
                        width={PILLAR_WIDTH}
                        height={state.bottomPillarHeight}
                        left={state.pillarLeft}
                    
                    />
                    <Shuttle 
                        top={state.shuttlePosition}
                    
                    />
                </div>
               

            </div>
        </>
    );
}
export default Game