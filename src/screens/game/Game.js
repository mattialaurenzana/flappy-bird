import { useContext, useEffect, useState } from "react";
import Score from "../../components/ui/score/Score";
import Shuttle from "../../components/ui/shuttle/Shuttle";
import Pillar from "../../components/ui/pillar/Pillar";
import './game.css'
import { useLocation, useNavigate } from "react-router-dom";
import BgContainer from "../../components/ui/bgcontainer/BgContainer";
import SCREENS from "../../routes/screenName";

function Game() {

    let currentUser = {};
    const navigate = useNavigate()
    let localstorageArray = localStorage.getItem('ranking')
    let localStorageRanking = !!localstorageArray ? JSON.parse(localstorageArray) : []
    const location = useLocation();
    const [username, setUsername] = useState('');
    const [finalscore, setFinalScore] = useState(0)
    const [gameover, setgameover] = useState(false)
    const [state, setState] = useState({
        shuttlePosition: 250,
        shuttleClass: '',
    })

    useEffect(() => {

        setUsername(location.state.username);

    }, [])


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
        const topCollision = state.shuttlePosition >= 0 && state.shuttlePosition < pillarHeight;
        const bottomCollision = state.shuttlePosition <= 550 && state.shuttlePosition >= 550 - bottomPillarHeight;
        const groundCollision = state.shuttlePosition === 495

        if ((groundCollision) || (pillarLeft >= 0 && pillarLeft <= PILLAR_WIDTH && (topCollision || bottomCollision))) {
            setGameHasStarted(false);
            setgameover(true)
            setTimeout(() => {
                storeData()
            }, 300);
            setTimeout(() => {
                navigate(SCREENS.gameover, {
                    state: {
                        username: username,
                        score: finalscore
                    }
                })
            }, 200);

        }

    }, [state.shuttlePosition, pillarHeight, bottomPillarHeight, pillarLeft]);

    function storeScore(e) {
        console.log('score da game', e);
        setFinalScore(e)
    }

    useEffect(() => {
        console.log('finalscore', finalscore);
    }, [finalscore])

    function storeData() {
        let presence = false
        localStorageRanking.forEach(e => {
            if (e.username === username) {
                presence = true
                if (finalscore > e.score) {
                    e.score = finalscore
                }
            }
        });
        if (!presence) {
            currentUser.username = username
            currentUser.score = finalscore
            console.log('currentuser score', currentUser.score);
            localStorageRanking.push(currentUser)
        }
        localStorage.setItem('ranking', JSON.stringify(localStorageRanking))
    }


    // function updateScore(e) {
    //    setScore(e.score);
    //    changeDifficulty(e.level)
    //    console.log(score);

    // }

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
        if (!gameover) {
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

    // function updateScore(e) {
    //     console.log(e);
    //     setState({
    //         ...state,
    //         score: e.score
    //     })

    //     changeDifficulty(e.level)
    // }


    function changeDifficulty(level) {
        setPillarGap(arrayLevel[level].pillarGap)
        setPillarSpeed(arrayLevel[level].pillarSpeed)
    }

    return (
        <>
            <BgContainer
                moonanimation={'moonanimation'}
                bganimation={'bganimation'}
            />
            <div className="game-container" onClick={handleClick}>
                <Score
                    gameHasStarted={gameHasStarted}
                    currentUser={localStorageRanking}
                    gameover={gameover}
                    callback={storeScore}
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