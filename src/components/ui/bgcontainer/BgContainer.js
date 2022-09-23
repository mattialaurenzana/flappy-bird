import './BgContainer.css'
import '../tutorial/Tutorial';
import { Howl, Howler } from 'howler'
import homeAudio from '../../../assets/audio/home-audio.mp3'

function BgContainer(props) {

    let sound = false

    const playSound = () => {
        let music = new Howl({
            src: [homeAudio],
            volume: 0.1,
            loop: true
        })
        music.play()
        if (!sound) {

            sound = true
        }
    }


    return (
        <>
            <div className="container" onClick={playSound}>
                <div className={`bg-container ${props.bganimation}`}></div>
            </div>
            <div className='content-block'>
                <div className={`moon-container ${props.moonanimation}`}>
                </div>
            </div>
        </>
    );
}
export default BgContainer;
