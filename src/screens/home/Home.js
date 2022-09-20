import { SpriteAnimator } from 'react-sprite-animator';
import BgContainer from '../../components/ui/bgcontainer/BgContainer';
import Tutorial from '../../components/ui/tutorial/Tutorial';
import {useState,useEffect} from 'react'
import './Home.css'
import Button from '../../components/ui/button/Button';
import InputBox from '../../components/ui/inputbox/InputBox';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import SCREENS from '../../routes/screenName';


function Home() {

    const navigate = useNavigate()
    const [state, setState] = useState({
        tutIsVisible: false
    })

    function closeWindowTutorial() {
        setState({
            ...state,
            tutIsVisible: false
        })
    }

    function openWindowTutorial() {
        setState({
            ...state,
            tutIsVisible: true
        })
    }

    function handleStart(){
        navigate(SCREENS.game)
    }

    return (
        <>
            {state.tutIsVisible && <Tutorial
                callback={closeWindowTutorial}
            />}
            <div className='home-container'>
                <h1 className='title'>Flappy Ufo</h1>
                <div className='img-container'>
                    <img className='spaceshuttle-spritesheet pixelart' src={require('../../assets/image/sprite-sheet.png')}/>
                </div>
                <InputBox
                    placeholder={'Inserire username...'}
                />
                <Button
                    label={'Start'}
                    callback={handleStart}
                />
                <Button
                    label={'Classifica'}
                />
            </div>
            <AiFillQuestionCircle className='tutorial-icon' onClick={openWindowTutorial} />
        </>
    );

}

export default Home;