import React, { useState } from "react";
import "./ToggleStyle.css";

// const Toggle = () => {
//     return (
//         <div>

//         </div>
//     );
// };

function Toggle() {
  /*
        1. enable state: useState(initialize value)
        2. initialize state: useState(false)
        3. reading state
        4. update state
    **/
  //const arr = useState(false);
  //console.log(arr);
  //console.log(arr[0]);

  const [on, setOn] = useState(false);
  console.log(on);

  // return <div className="toggle" onClick={ () => setOn(true)}>Toggle {on ? "On" : "Off"}</div>

  const handleToggle = () => {
    setOn((on) => {
        console.log('current on value '+ on);
        return !on;
    });
  };

  return(
  <div> 
    <div className={`toggle ${on ? "active": ""}`} onClick={handleToggle}>
      <div className={`spinner ${on ? "active": ""}`} ></div>
    </div>
    {on ? "On":"Off"}
    <div className="toggle-control">
        <div className="toggle-on" onClick={handleToggle}>On</div>
        <div className="toggle-off" onClick={handleToggle}>Off</div>
    </div>
  </div>);
}

export default Toggle;
