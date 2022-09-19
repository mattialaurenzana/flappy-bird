import './BgContainer.css'

function BgContainer() {

    return (
        <div className='container'>
            <div className='bg-container'>
            </div>
            <img src={require('../../../assets/image/moon.png')} className='moon'></img>
        </div>
    )

}
export default BgContainer;