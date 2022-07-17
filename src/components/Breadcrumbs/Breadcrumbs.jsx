import React from 'react'

function Breadcrumbs() {
  return (
    <>
      <div>
        <div className="checkout__progress py-4">
          <ul className="d-flex align-items-center justify-content-between">
            <li id="step-1" className="done" ></li>
            <li id="step-2" className="done"></li>
            <li id="step-3"></li>
            <li id="step-4"></li>
            
          </ul>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="33.33" aria-valuemin="0" 
                aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Breadcrumbs
