import BgContainer from "../../components/ui/bgcontainer/BgContainer";
import Tutorial from "../../components/ui/tutorial/Tutorial";
import { useState, useEffect } from "react";
import "./Home.css";
import Button from "../../components/ui/button/Button";
import InputBox from "../../components/ui/inputbox/InputBox";
import { AiFillQuestionCircle, AiFillCloseCircle } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi"
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import SCREENS from "../../routes/screenName";
import { Howl, Howler } from 'howler'
import homeAudio from '../../assets/audio/home-audio.mp3'



function Home() {

  const [play, setPlay] = useState(false);

  const navigate = useNavigate();
  let inputString = "";

  const [state, setState] = useState({
    tutIsVisible: false,
    emptyInput: false
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

  const playSound = () => {
    console.log('audio');
    let sound = new Howl({
      src: [homeAudio],
      volume: 0.3
    })
    sound.play()
  }

  function seeWindowTutorial() {
    setState({
      ...state,
      tutIsVisible: !state.tutIsVisible,
    });
  }

  function goToRanking() {
    navigate(SCREENS.ranking);
  }

  function handleInput(e) {

    inputString = e.target.value;
  }

  function handleFocus() {
    if (state.emptyInput) {
      setState({
        ...state,
        emptyInput: false
      })
    }
  }

  function handleStart() {

    if (inputString.length === 0) {
      setState({
        ...state,
        emptyInput: true
      })
    } else {

      //creazione dellnuovo oggetto user e aggiunta al local storage
      const currentUser = {};
      currentUser.username = inputString;
      // localStorageRanking.push(currentUser);
      // localStorage.setItem('ranking',JSON.stringify(localStorageRanking));
      navigate(SCREENS.game, {
        state: {
          username: currentUser.username.toLowerCase()
        }
      });
    }

  }

  return (
    <>

      <BgContainer />
      {state.tutIsVisible &&
        <>
          <h1 className="title-tutorial">Tutorial</h1>
          <Tutorial callback={closeWindowTutorial} />
        </>}

      {!state.tutIsVisible &&
        <div className="home-container" onClick={playSound}>
          <h1 className="title">Flying shuttle</h1>
          <div className="img-container">
            <img
              className="spaceshuttle-spritesheet pixelart"
              src={require("../../assets/image/sprite-sheet.png")}
            />
          </div>
          <div className="input-banner">
            <InputBox
              placeholder={"Inserire username..."}
              callbackChange={handleInput}
              callbackFocus={handleFocus}
            />

            {/* banner che viene visualizzato se l'Utente non inserisce nulla nell'input */}
            {
              state.emptyInput &&
              <div className="error-banner">
                <BiErrorAlt />
                <div className="error-text">Inserire almeno un carattere</div>
              </div>
            }
          </div>

          <Button label={"Gioca"} callback={handleStart} />
          <Button label={"Classifica"} callback={goToRanking} />
        </div>
      }

      {!state.tutIsVisible ?
        <AiFillQuestionCircle
          className="tutorial-icon white-icon"
          onClick={seeWindowTutorial}
        /> :
        <AiFillCloseCircle
          className="tutorial-icon red-icon"
          onClick={seeWindowTutorial}
        />

      }

    </>
  );
}

export default Home;
