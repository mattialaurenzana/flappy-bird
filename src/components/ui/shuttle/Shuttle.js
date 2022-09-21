import './shuttle.css';

function Shuttle(props) {
  return (
    <>
      <div className={`shuttle-container`} style={{top:`${props.top}px`}}>
        <img
          className={`shuttle pixelart ${props.class}`}
          src={require("../../../assets/image/sprite-sheet.png")}
        ></img>
      </div>
    </>
  );
}

export default Shuttle;
