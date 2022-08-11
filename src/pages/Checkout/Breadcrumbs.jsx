import React from 'react'

function Breadcrumbs({ checkoutStage }) {  
  let style = null;
  let stageNo = null;
  
  switch (checkoutStage) {         
    case 'shipping': 
      style = { width: "33.33%" };
      stageNo = 2;
      break;
    case 'payment': 
      style = { width: "66.66%" };
      stageNo = 3;
      break;
    case 'complete': 
      style = { width: "100%" };
      stageNo = 4;
      break;  
    default: 
      style = { width: "0%" };
    
  }    

  return (
    <>
      <div className="checkout-progress">
        <ul>
          <li className="done" ></li>
          <li className={stageNo >= 2 ? 'done' : null}></li>
          <li className={stageNo >= 3 ? 'done' : null}></li>
          <li className={stageNo === 4 ? 'done' : null}></li>
        </ul>
        <div className="progress">
          <div className="progress__bar" role="progressbar" style={style} aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </>
  )
}

export default Breadcrumbs
