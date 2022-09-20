import './BgContainer.css'
import '../tutorial/Tutorial';

function BgContainer() {
    return (
        <>
            <div className="container">
                <div className="bg-container"></div>
            </div>
            <div className="moon-container">
                <img className='flat-moon' src={require('../../../assets/image/flat-moon.png')}></img>
            </div></>
    );
}
export default BgContainer;
