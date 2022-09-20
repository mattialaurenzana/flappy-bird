import './tutorial.css';
import {AiFillCloseCircle} from 'react-icons/ai';

function Tutorial(props){
    
    return(
        <>
        
            <div className="tutorial-container">
                <div className='close-tutorial'>
                    <AiFillCloseCircle className='close-icon'/>
                </div>
                Questo è il tutorial del gioco
            </div>
        
        
        </>

    )
}

export default Tutorial;