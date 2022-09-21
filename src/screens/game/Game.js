import { useEffect, useState } from "react";
import Score from "../../components/ui/score/Score";
import Shuttle from "../../components/ui/shuttle/Shuttle";
import Pillar from "../../components/ui/pillar/Pillar";
import './game.css'

function Game() {

    const GAME_HEIGHT = 500;
    const GAME_WIDTH = 350;
    const SHUTTLE_SIZE = 58;
    const JUMP_HEIGHT = 80;
    const GRAVITY = 6;
    const PILLAR_WIDTH = 40;
    const PILLAR_GAP = 150;



    const [pillarHeight, setPillarHeight] = useState(200);
    const [pillarLeft, setPillarLeft] = useState(GAME_WIDTH - PILLAR_WIDTH);
    const [gameHasStarted, setGameHasStarted] = useState(false);
    const bottomPillarHeight = GAME_HEIGHT - PILLAR_GAP - pillarHeight;

    const [state, setState] = useState({
        username: '',
        shuttlePosition: 250,
        // shuttleClass: '',
        // shuttleContainerClass:''
    })

    useEffect(() => {
        let shuttleId;
        if (gameHasStarted && state.shuttlePosition < GAME_HEIGHT - SHUTTLE_SIZE) {
            shuttleId = setInterval(() => {
                setState({
                    ...state,
                    shuttlePosition: state.shuttlePosition + GRAVITY
                })

            }, 24)
        }
        return () => {
            clearInterval(shuttleId);
        }
    }, [state.shuttlePosition, gameHasStarted])


    useEffect(() => {
        let pillarId;
        if (gameHasStarted && pillarLeft >= -PILLAR_WIDTH) {
            pillarId = setInterval(() => {
                setPillarLeft(pillarLeft - 5)
            }, 24);

            return () => {
                clearInterval(pillarId);
            }
        }else{
           changePillarHeight();
        }
    },[gameHasStarted,pillarLeft])

    useEffect(() => {
        const topCollision = state.shuttlePosition >= 0 && state.shuttlePosition < pillarHeight;
        const bottomCollision = state.shuttlePosition <= 500 && state.shuttlePosition >= 500 - bottomPillarHeight;

        if(pillarLeft >= 0 && pillarLeft <= PILLAR_WIDTH && (topCollision || bottomCollision)){
            setGameHasStarted(false);
        }

    },[state.shuttlePosition,pillarHeight,bottomPillarHeight,pillarLeft]);

    const changePillarHeight = ()=>{

        setPillarLeft(GAME_WIDTH - PILLAR_WIDTH);
        setPillarHeight(Math.floor(Math.random() * (GAME_HEIGHT - PILLAR_GAP)));
    }

    const handleClick = () => {
        let newShuttlePosition = state.shuttlePosition - JUMP_HEIGHT;

        if (!gameHasStarted) {
            setGameHasStarted(true)
        } else if (newShuttlePosition < 0) {
            setState({
                ...state,
                shuttlePosition: 0
            })
        } else {
            setState({
                ...state,
                shuttlePosition: newShuttlePosition
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
                <Score 
                    gameHasStarted = {gameHasStarted}
                />

                <div className="game-box">
                    <Pillar
                        top={0}
                        width={PILLAR_WIDTH}
                        height={pillarHeight}
                        left={pillarLeft}

                    />
                    <Pillar
                        top={GAME_HEIGHT - (pillarHeight + bottomPillarHeight)}
                        width={PILLAR_WIDTH}
                        height={bottomPillarHeight}
                        left={pillarLeft}

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