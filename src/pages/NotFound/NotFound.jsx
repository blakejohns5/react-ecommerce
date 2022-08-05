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
    }, 4000);
  // });

  return (
    <>
    <main className='not-found'>
        <h1>404 Error</h1>
        <h3>This page cannot be found</h3>
        <div>{icon}</div>
        <h3>You are being redirected to the home page</h3>
      </main>
      </>
  ) 
}

export default NotFound;

