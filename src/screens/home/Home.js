import { SpriteAnimator } from 'react-sprite-animator';
import BgContainer from '../../components/ui/bgcontainer/BgContainer';
import Tutorial from '../../components/ui/tutorial/Tutorial';
import {useState,useEffect} from 'react'
import './Home.css'
import Button from '../../components/ui/button/Button';
import InputBox from '../../components/ui/inputbox/InputBox';
import { AiFillQuestionCircle } from 'react-icons/ai';


function Home() {

<<<<<<< HEAD
    const [state,setState] = useState({
        tutIsVisible : false
=======
    const [state, setState] = useState({
        tutIsVisible: false
>>>>>>> 6c8601893515f4a0ae427f15d15d13e5859df85c
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

    return (
        <>
            <BgContainer />
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