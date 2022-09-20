import './tutorial.css';
import {AiFillCloseCircle} from 'react-icons/ai';

function Tutorial(props){

    function closeTut(){
        if(!!props.callback){
            props.callback();
        }
    }
    
    return(
        <>
        
            <div className={`tutorial-container`}>
                <div className='close-tutorial'>
                    <AiFillCloseCircle className='close-icon' onClick={closeTut}/>
                </div>
                Questo è il tutorial del gioco
            </div>
        
        
        </>

    )
}

export default Tutorial;