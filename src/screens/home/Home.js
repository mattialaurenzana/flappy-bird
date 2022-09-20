import { SpriteAnimator } from 'react-sprite-animator';
import BgContainer from '../../components/ui/bgcontainer/BgContainer';
import './Home.css'
import Button from '../../components/ui/button/Button';
import InputBox from '../../components/ui/inputbox/InputBox';


function Home() {

    return (
        <>
            <BgContainer />
            <div className='home-container'>
                <h1 className='title'>Flappy Ufo</h1>
                <div className='img-container'>
                    {/* <SpriteAnimator
                        sprite={'./heart.svg'}
                        width={36}
                        height={36}
                        shouldAnimate={true}
                        startFrame={0}
                        stopLastFrame={true}
                    /> */}
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

        </>
    );

}

export default Home;