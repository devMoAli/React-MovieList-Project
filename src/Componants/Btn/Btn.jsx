import React, { useState } from "react";

function StrBtn(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? <h5>Story: {props.str}</h5> : null}
     
      <button onClick={() => { setShow(!show) }} >{!show ? "Show Story" : "Hide Story"}</button>

    </div>
  );
}

export default StrBtn;
