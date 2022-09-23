import './BgContainer.css'
import '../tutorial/Tutorial';
import { AiFillQuestionCircle } from 'react-icons/ai'
import { Howl, Howler } from 'howler'
import homeAudio from '../../../assets/audio/home-audio.mp3'
import { useEffect, useState } from 'react';

function BgContainer(props) {

    let sound = false

    const playSound = () => {
        let music = new Howl({
            src: [homeAudio],
            volume: 0.1
        })
        if (!sound) {
            music.play()
            sound = true
        }
    }

    return (
        <>

            <div className="container" onClick={playSound}>
                <div className={`bg-container ${props.bganimation}`}></div>
            </div>
            <div className='content-block'>
                <div data-animation className={`moon-container ${props.moonanimation}`}>
                </div>
            </div>
        </>
    );
}
export default BgContainer;
