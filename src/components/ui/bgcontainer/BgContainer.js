import './BgContainer.css'
import '../../tutorial/Tutorial';
import { SpriteAnimator } from 'react-sprite-animator';

function BgContainer() {

    return (
        <div className='container'>
           
            <SpriteAnimator 
                width={300}
                height={300}
                scale={1}
                sprite={'./sprite-sheet.png'}
                direction={'horizontal'}
                shouldAnimate={true}
                fps={2}
                stopLastFrame={false}
                startFrame={1}
                frameCount={23}
                wrapAfter={7}
            
            />
            <div className='bg-container'>
            </div>
            <div className='moon-container'>
                <img src={require('../../../assets/image/flat-moon.png')} className='moon'></img>
            </div>
           
        </div>
    )

}
export default BgContainer;