import { useEffect, useState } from "react";
import Score from "../../components/ui/score/Score";
import Shuttle from "../../components/ui/shuttle/Shuttle";
import Pillar from "../../components/ui/pillar/Pillar";
import './game.css'

function Game() {

    const GAME_HEIGHT = 550;
    const GAME_WIDTH = 375;
    const SHUTTLE_SIZE = 58;
    const JUMP_HEIGHT = 80;
    const GRAVITY = 5;
    const PILLAR_WIDTH = 80;
    const PILLAR_GAP = 150;



    const [pillarHeight, setPillarHeight] = useState(200);
    const [pillarLeft, setPillarLeft] = useState(GAME_WIDTH - PILLAR_WIDTH);
    const [gameHasStarted, setGameHasStarted] = useState(false);
    const bottomPillarHeight = GAME_HEIGHT - PILLAR_GAP - pillarHeight;

    const [state, setState] = useState({
        username: '',
        shuttlePosition: 250,
        shuttleClass: '',
    })

    // add gravity
    useEffect(() => {
        let shuttleId;
        if (gameHasStarted && state.shuttlePosition < GAME_HEIGHT - SHUTTLE_SIZE) {
            shuttleId = setInterval(() => {
                setState({
                    ...state,
                    shuttlePosition: state.shuttlePosition + GRAVITY,
                    shuttleClass: 'shuttledown'
                })

            }, 24)
        }
        return () => {
            clearInterval(shuttleId);
        }
    }, [state.shuttlePosition, gameHasStarted])

    // add pillar
    useEffect(() => {
        let pillarId;
        if (gameHasStarted && pillarLeft >= -PILLAR_WIDTH) {
            pillarId = setInterval(() => {
                setPillarLeft(pillarLeft - 3)
            }, 24);

            return () => {
                clearInterval(pillarId);
            }
        } else {
            changePillarHeight();
        }
    }, [gameHasStarted, pillarLeft])

    // check collisions
    useEffect(() => {
        const topCollision = state.shuttlePosition >= 0 && state.shuttlePosition < pillarHeight;
        const bottomCollision = state.shuttlePosition <= 550 && state.shuttlePosition >= 550 - bottomPillarHeight;
        const groundCollision = state.shuttlePosition === 495

        if ((groundCollision) || (pillarLeft >= 0 && pillarLeft <= PILLAR_WIDTH && (topCollision || bottomCollision))) {
            setGameHasStarted(false);
            setState({
                ...state,
                shuttlePosition: 250,
                shuttleClass: ''
            })
        }

    }, [state.shuttlePosition, pillarHeight, bottomPillarHeight, pillarLeft]);

    const changePillarHeight = () => {
        setPillarLeft(GAME_WIDTH - PILLAR_WIDTH);
        setPillarHeight(Math.floor(Math.random() * (GAME_HEIGHT - PILLAR_GAP)));
    }

    // jump shuttle
    const handleClick = () => {
        let newShuttlePosition = state.shuttlePosition - JUMP_HEIGHT;
        let shuttleclass = 'shuttleup'
        if (!gameHasStarted) {
            setGameHasStarted(true)
            shuttleclass = 'shuttledown'
        } else if (newShuttlePosition < 0) {
            shuttleclass = 'shuttleup'
            newShuttlePosition = 0
        }
        setState({
            ...state,
            shuttlePosition: newShuttlePosition,
            shuttleClass: shuttleclass
        })
    }


    return (
        <>
            <div className="game-container" onClick={handleClick}>
                <Score
                    gameHasStarted={gameHasStarted}
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
                        class={state.shuttleClass}
                    />
                </div>


            </div>
        </>
    );
}
export default Game