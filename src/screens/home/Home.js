import { SpriteAnimator } from "react-sprite-animator";
import BgContainer from "../../components/ui/bgcontainer/BgContainer";
import Tutorial from "../../components/ui/tutorial/Tutorial";
import { useState, useEffect } from "react";
import "./Home.css";
import Button from "../../components/ui/button/Button";
import InputBox from "../../components/ui/inputbox/InputBox";
import { AiFillQuestionCircle } from "react-icons/ai";
import {BiErrorAlt} from "react-icons/bi"
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import SCREENS from "../../routes/screenName";

function Home() {
  const navigate = useNavigate();
  let inputString = "";

  let localStorageRanking = [];

  const [state, setState] = useState({
    tutIsVisible: false,
    emptyInput : false
  });

  // useEffect(() => {
  //   localStorageRanking = JSON.parse(localStorage.getItem('ranking'));
  // },[])

  function closeWindowTutorial() {
    setState({
      ...state,
      tutIsVisible: false,
    });
  }

  function openWindowTutorial() {
    setState({
      ...state,
      tutIsVisible: true,
    });
  }

  function goToWinLose() {
    navigate(SCREENS.ranking);
  }

  function handleInput(e){

     inputString = e.target.value;
  }

  function handleStart() {

    if(inputString.length === 0){
      setState({
        ...state,
        emptyInput : true
      })
    }else{

      //creazione dellnuovo oggetto user e aggiunta al local storage
      const currentUser =  {};
      currentUser.username = inputString;
      localStorageRanking.push(currentUser);
      localStorage.setItem('ranking',JSON.stringify(localStorageRanking));
      navigate(SCREENS.game);
    }
    
  }

  return (
    <>
      {state.tutIsVisible && <Tutorial callback={closeWindowTutorial} />}

      { !state.tutIsVisible &&
        <div className="home-container">
          <h1 className="title">Flappy Ufo</h1>
          <div className="img-container">
            <img
              className="spaceshuttle-spritesheet pixelart"
              src={require("../../assets/image/sprite-sheet.png")}
            />
          </div>
         <div className="input-banner">
          <InputBox 
              placeholder={"Inserire username..."} 
              callbackChange = {handleInput}
            />
            {
              state.emptyInput &&
              <div className="error-banner">
                <BiErrorAlt />
                <div className="error-text">Inserire almeno un carattere</div>
              </div>
            }
         </div>

          <Button label={"Gioca"} callback={handleStart} />
          <Button label={"Classifica"} callback={goToWinLose} />
        </div>
      }

      <AiFillQuestionCircle
        className="tutorial-icon"
        onClick={openWindowTutorial}
      />
    </>
  );
}

export default Home;
