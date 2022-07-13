import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
// import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'


function NotFound() {
  const icon = <FontAwesomeIcon icon={faFaceFrown} />
  const navigate = useNavigate();
  // useEffect(() => {
      setTimeout(() => {
        navigate('/')
    }, 3000);
  // });

  return (
    <>
    <main className='d-flex flex-column align-items-center pt-5 mt-5 vh-100'>
        <h1>404 Error</h1>
        <h3>This page cannot be found</h3>
        <div className='fs-1 mt-5'>{icon}</div>
      </main>
      </>
  ) 
}

export default NotFound;

