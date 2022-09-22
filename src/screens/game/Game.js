import { useContext, useEffect, useState } from "react";
import Score from "../../components/ui/score/Score";
import Shuttle from "../../components/ui/shuttle/Shuttle";
import Pillar from "../../components/ui/pillar/Pillar";
import './game.css'
import { useLocation } from "react-router-dom";

function Game() {

    
    const [state, setState] = useState({
        username: '',
        shuttlePosition: 250,
        shuttleClass: '',
        falling: false,
        score: 0
    })

    const location = useLocation();


    useEffect(()=>{
        setState({
            ...state,
            username : location.state.username
        })
    },[])

    const GAME_HEIGHT = 550;
    const GAME_WIDTH = 375;
    const SHUTTLE_SIZE = 58;
    const JUMP_HEIGHT = 100;
    const GRAVITY = 5;
    const PILLAR_WIDTH = 80;
    const arrayLevel = [
        {
            pillarGap: 200,
            pillarSpeed: 4
        },
        {
            pillarGap: 180,
            pillarSpeed: 5
        },
        {
            pillarGap: 150,
            pillarSpeed: 6
        },
        {
            pillarGap: 140,
            pillarSpeed: 7
        }

    ]
    const [pillarHeight, setPillarHeight] = useState(200);
    const [pillarLeft, setPillarLeft] = useState(GAME_WIDTH);
    const [gameHasStarted, setGameHasStarted] = useState(false);
    const [pillarGap, setPillarGap] = useState(arrayLevel[0].pillarGap);
    const [pillarSpeed, setPillarSpeed] = useState(arrayLevel[0].pillarSpeed);



    const bottomPillarHeight = GAME_HEIGHT - pillarGap - pillarHeight;

    // add gravity
    useEffect(() => {
        let shuttleId;
        if (gameHasStarted && state.shuttlePosition < GAME_HEIGHT - SHUTTLE_SIZE) {
            shuttleId = setInterval(() => {
                setState({
                    ...state,
                    shuttlePosition: state.shuttlePosition + GRAVITY,
                    falling: true,
                    shuttleClass: 'shuttledown'
                })

            }, 24)
        }
        return () => {
            clearInterval(shuttleId);
        }

    }, [state.shuttlePosition, gameHasStarted])

    // useEffect(() => {
    //     let timer
    //     if (state.falling) {
    //         timer = setTimeout(() => {
    //             console.log('down');
    //             setState({
    //                 ...state,
    //                 shuttleClass: 'shuttledown'
    //             })
    //         }, 1000);
    //     }
    //     return () => clearTimeout(timer);
    // }, [state.falling,state.shuttleClass]);

    // add pillar
    useEffect(() => {
        let pillarId;
        if (gameHasStarted && pillarLeft >= -PILLAR_WIDTH) {
            pillarId = setInterval(() => {
                setPillarLeft(pillarLeft - pillarSpeed)
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
                shuttleClass: 'explosion',
                falling: false,
            })
        }

    }, [state.shuttlePosition, pillarHeight, bottomPillarHeight, pillarLeft]);

    const changePillarHeight = () => {
        setPillarLeft(GAME_WIDTH);
        setPillarHeight(Math.floor(Math.random() * (GAME_HEIGHT - pillarGap)));
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

    function updateScore(e) {
        setState({
            ...state,
            score: e.score
        })
        changeDifficulty(e.level)
    }



    function changeDifficulty(level) {
        console.log('level', level);
        setPillarGap(arrayLevel[level].pillarGap)
        setPillarSpeed(arrayLevel[level].pillarSpeed)
    }


    return (
        <>
            <div className="game-container" onClick={handleClick}>
                <Score
                    gameHasStarted={gameHasStarted}
                    callback={updateScore}
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