import './BgContainer.css'
import '../tutorial/Tutorial';

function BgContainer() {
    return (
        <>
            <div className="container">
                <div className="bg-container"></div>
            </div>
            <div className='content-block'>
                <div className="moon-container" id='bg-key-frames'>
                    {/* <img className='flat-moon' src={require('../../../assets/image/flat-moon.png')}></img> */}
                </div>
            </div>
        </>
    );
}
export default BgContainer;
