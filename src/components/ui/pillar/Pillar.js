import './pillar.css';

function Pillar(props){

    const MY_STYLE = {
        top : `${props.top}px`,
        width : `${props.width}px`,
        height : `${props.height}px`,
        left : `${props.left}px`,

    }
    return(
        <>
        
            <div className='pillar-container'
                style = {
                    MY_STYLE
                }
            >

            </div>
        
        </>
    )
}
export default Pillar;