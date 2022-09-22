import { useNavigate } from "react-router-dom";
import './gameover.css'
import SCREENS from "../../../routes/screenName";


function GameOver() {
    const navigate = useNavigate()
    console.log('entra');

    function goToHome() {
        navigate(SCREENS.home)
    }
    function goToGame() {
        navigate(SCREENS.game)
    }
    function goToRank() {
    }

    return (
        <>
            <div className={`gameover-container`}>
                <button onClick={goToHome} className='button'>Home</button>
                <button onClick={goToGame} className='button'>Rigioca</button>
                <button onClick={goToRank} className='button'>RAnk</button>

            </div>


        </>
    )
};

export default GameOver