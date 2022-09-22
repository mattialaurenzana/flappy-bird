import { useNavigate, useLocation } from "react-router-dom";
import './gameover.css'
import SCREENS from "../../routes/screenName";
import { useEffect, useState } from "react";
import BgContainer from "../../components/ui/bgcontainer/BgContainer";
import Button from "../../components/ui/button/Button";


function GameOver() {
    const navigate = useNavigate()
    const location = useLocation()
    let bestScoreArray = JSON.parse(localStorage.getItem('ranking'))
    let score = location.state.score
    const [bestScore, setBestScore] = useState(0)

    useEffect(() => {
        bestScoreArray.forEach(e => {
            if (e.username === location.state.username && e.score > bestScore) {
                setBestScore(e.score)
            }
        });
    }, [])

    function goToHome() {
        navigate(SCREENS.home)
    }
    function goToGame() {
        navigate(SCREENS.game, {
            state: {
                username: location.state.username
            }
        })
    }
    function goToRank() {
        navigate(SCREENS.ranking)
    }

    return (
        <>
            <BgContainer />
            <div className="gameover-container">
                <h1 className='title-gameover'>Game Over!</h1>
                <div className={`gameover-card`}>
                    <div className="score-gameover">Score : {score}</div>
                    <div>Best Score: {bestScore}</div>
                    <Button
                        callback={goToHome}
                        label={'Home'}
                    />
                    <Button
                        callback={goToGame}
                        label={'Rigioca'}
                    />
                    <Button
                        callback={goToRank}
                        label={'Ranking'}
                    />
                </div>
            </div>


        </>
    )
};

export default GameOver