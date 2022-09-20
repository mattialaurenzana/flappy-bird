import BgContainer from '../../components/ui/bgcontainer/BgContainer';
import Tutorial from '../../components/tutorial/Tutorial';
import {useState,useEffect} from 'react'
import './Home.css'

function Home() {

    const [state,setState] = useState({
        tutIsVisible : 'visible'
    })

    function closeWindowTut(){
       setState({
        tutIsVisible : 'not-visible'
       })
    }

    return (
        <>
            <BgContainer />
            <Tutorial 
                callback={closeWindowTut}
                className={state.tutIsVisible}
            />
            <div className='home-container'>
                <h1 className='title'>Flappy Ufo</h1>
            <div className='img-container'></div>
            </div>
            
        </>
    );

}

export default Home;