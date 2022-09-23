import { useContext, useEffect, useState } from "react";
import Score from "../../components/ui/score/Score";
import Shuttle from "../../components/ui/shuttle/Shuttle";
import Pillar from "../../components/ui/pillar/Pillar";
import './game.css'
import { useLocation, useNavigate } from "react-router-dom";
import BgContainer from "../../components/ui/bgcontainer/BgContainer";
import SCREENS from "../../routes/screenName";

function Game() {

    const navigate = useNavigate()
    const GAME_HEIGHT = 550;
    const GAME_WIDTH = 375;
    const SHUTTLE_SIZE = 58;
    const JUMP_HEIGHT = 100;
    const GRAVITY = 5;
    const PILLAR_WIDTH = 80;
    const arrayLevel = [
        {
            pillarGap: 180,
            pillarSpeed: 4
        },
        {
            pillarGap: 160,
            pillarSpeed: 5
        },
        {
            pillarGap: 140,
            pillarSpeed: 6
        },
        {
            pillarGap: 120,
            pillarSpeed: 7
        }

    ]
    const location = useLocation();
    const [username, setUsername] = useState('');
    const [gameover, setgameover] = useState(false)
    const [pillarHeight, setPillarHeight] = useState(200);
    const [pillarLeft, setPillarLeft] = useState(GAME_WIDTH);
    const [gameHasStarted, setGameHasStarted] = useState(false);
    const [pillarGap, setPillarGap] = useState(arrayLevel[0].pillarGap);
    const [pillarSpeed, setPillarSpeed] = useState(arrayLevel[0].pillarSpeed);
    const bottomPillarHeight = GAME_HEIGHT - pillarGap - pillarHeight;
    const [state, setState] = useState({
        shuttlePosition: 250,
        shuttleClass: '',
    })


    useEffect(() => {

        setUsername(location.state.username);

    }, [])

    // currentUser.username = username;
    // localStorageRanking.push(currentUser);

    const [score, setScore] = useState(0);


    // add gravity
    useEffect(() => {
        let shuttleId;
        if (gameHasStarted && state.shuttlePosition < GAME_HEIGHT - SHUTTLE_SIZE) {
            shuttleId = setInterval(() => {
                setState({
                    ...state,
                    shuttlePosition: state.shuttlePosition + GRAVITY,
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
        const topCollision = state.shuttlePosition >= 0 && state.shuttlePosition < pillarHeight - 50;
        const bottomCollision = state.shuttlePosition <= 550 && state.shuttlePosition >= 550 - bottomPillarHeight + 10;
        const groundCollision = state.shuttlePosition === 495

        if ((groundCollision) || (pillarLeft >= 0 && pillarLeft <= PILLAR_WIDTH && (topCollision || bottomCollision))) {
            setgameover(true)
            setGameHasStarted(false);
            setState({
                ...state,
                shuttleClass: 'explosion'
            })

        }

    }, [state.shuttlePosition, pillarHeight, bottomPillarHeight, pillarLeft]);



    function storeScore(e) {
        setTimeout(() => {
            navigate(SCREENS.gameover, {
                state: {
                    username: username,
                    score: e
                }
            })
        }, 800);
    }


    


    function changeDifficulty(level) {
        setPillarGap(arrayLevel[level].pillarGap)
        setPillarSpeed(arrayLevel[level].pillarSpeed)
    }

    const changePillarHeight = () => {
        setPillarLeft(GAME_WIDTH);
        setPillarHeight(Math.floor(Math.random() * (GAME_HEIGHT - pillarGap)));
    }

    // jump shuttle
    const handleClick = () => {
        if (!state.gameover) {
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

    }

    return (
        <>
            <BgContainer
                moonanimation={'moonanimation'}
            />
            <div className="game-container" onClick={!gameover && handleClick}>
                <Score
                    gameHasStarted={gameHasStarted}
                    gameover={gameover}
                    callbackScore={storeScore}
                    callbackLevel={changeDifficulty}
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