import { useNavigate, useLocation } from "react-router-dom";
import './gameover.css'
import SCREENS from "../../routes/screenName";
import { useEffect, useState } from "react";
import BgContainer from "../../components/ui/bgcontainer/BgContainer";
import Button from "../../components/ui/button/Button";


function GameOver() {
    const navigate = useNavigate()
    const location = useLocation()
    let score = location.state.score
    console.log(score);

    function goToHome() {
        navigate(SCREENS.home)
    }
    function goToGame() {
        navigate(SCREENS.game,{
            state:{
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
                    <p className="score-gameover">Score : {score}</p>
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