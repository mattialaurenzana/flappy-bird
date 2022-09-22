import { useNavigate } from "react-router-dom";
import './gameover.css'
import SCREENS from "../../../routes/screenName";


function GameOver(props) {
    const navigate = useNavigate()

    let arrRank = JSON.parse(localStorage.getItem('ranking'))
    let score = arrRank[arrRank.length -1].score

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
                <p>Score : {score}</p>
                <button onClick={goToHome} className='button'>Home</button>
                <button onClick={goToGame} className='button'>Rigioca</button>
                <button onClick={goToRank} className='button'>Rank</button>

            </div>


        </>
    )
};

export default GameOver