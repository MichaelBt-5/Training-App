import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
     
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
         
          <img className='Image' src={props.image} alt='dupa'/>
         {!props.name ? <div className='dupa'>{props.content}</div> : <div className='dupa2'>{props.name}</div> }
        </div>
      )}
    </div>
  );
};

export default Tooltip;
