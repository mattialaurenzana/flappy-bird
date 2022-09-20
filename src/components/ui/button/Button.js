import './Button.css'

function Button(props) {

    function handleClick() {
        if (!!props.callback)
            props.callback()
    }

    return (
        <div
            className={` button ${props.cssClass}`}
            onClick={handleClick}
        >
            {props.label}
        </div>
    );

}

export default Button;