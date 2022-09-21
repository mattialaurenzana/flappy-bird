import './shuttle.css';

function Shuttle(props) {
  return (
    <>
      <div className={`shuttle-container ${props.class}`} style={{top:`${props.top}px`}}>
        <img
          className={`shuttle pixelart `}
          src={require("../../../assets/image/sprite-sheet.png")}
        ></img>
      </div>
    </>
  );
}

export default Shuttle;
