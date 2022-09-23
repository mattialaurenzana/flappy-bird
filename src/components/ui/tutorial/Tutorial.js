import './tutorial.css';
import {AiFillCloseCircle,} from 'react-icons/ai';

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
                Benvenuto!
                <br/>
                Il pilota della navicella spaziale Enterprise é rimasto ferito in battaglia. Abbiamo bisogno di te per superare le rocce appuntite di questo pianeta.
                <br/>
                Prendi il comando e riportaci a casa!
                <br/>
                <br/>
                Tutorial:
                <br/>
                Clicca sullo schermo per far saltare la navicella ma attento alle rocce che vi faranno esplodere!
            </div>
        
        </>

    )
}

export default Tutorial;