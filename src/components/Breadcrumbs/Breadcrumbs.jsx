import React from 'react'

function Breadcrumbs({ checkoutStage }) {
  
  let style = null;
  let stageNo = null;
  console.log('Breadcrumbs checkoutStage: ' + checkoutStage);

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
  
console.log(style)

  return (
    <>
      <div>
        <div className="checkout__progress py-4">
          <ul className="d-flex align-items-center justify-content-between">
            <li id="step-1" className="done" ></li>
            <li id="step-2" className={stageNo >= 2 ? 'done' : null}></li>
            <li id="step-3" className={stageNo >= 3 ? 'done' : null}></li>
            <li id="step-4" className={stageNo === 4 ? 'done' : null}></li>
            
          </ul>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={style} aria-valuenow="33.33" aria-valuemin="0" 
                aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Breadcrumbs
