import { useNavigate } from "react-router-dom";
import './gameover.css'
import SCREENS from "../../../routes/screenName";
import { useEffect, useState } from "react";


function GameOver(props) {
    const navigate = useNavigate()

    const [arrRank, setarrRank] = useState(JSON.parse(localStorage.getItem('ranking')))
    console.log(arrRank[arrRank.length - 1].score);
    const [userScore, setuserScore] = useState(props.score)


    function goToHome() {
        navigate(SCREENS.home)
    }
    function goToGame() {
        props.callback()
    }
    function goToRank() {
        navigate(SCREENS.ranking)
    }

    return (
        <>
            <div className={`gameover-container`}>
                <div className='title-gameover'>GameOver</div>
                <p>Score : {userScore}</p>
                <button onClick={goToHome} className='button'>Home</button>
                <button onClick={goToGame} className='button'>Rigioca</button>
                <button onClick={goToRank} className='button'>Rank</button>

            </div>


        </>
    )
};

export default GameOver