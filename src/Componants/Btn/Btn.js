import React, { useState } from "react";

function StrBtn(props) {
  const [show, setShow] = useState(false);
const handleClick = () => {
  setShow(false);
}
  return (
    <div>
      {show ? <h4>Story: {props.str}</h4> : null}
     
      <button onClick={() => {handleClick(); setShow(!show) }} >{!show ? "Show Story" : "Hide Story"}</button>

    </div>
  );
}

export default StrBtn;
