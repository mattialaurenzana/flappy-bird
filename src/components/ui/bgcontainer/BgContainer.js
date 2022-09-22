import './BgContainer.css'
import '../tutorial/Tutorial';

function BgContainer(props) {
    return (
        <>
            <div className="container">
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
