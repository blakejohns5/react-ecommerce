import { useContext } from 'react';
import MessageContext from '../../context/MessageProvider';


function Message() {
  const { message, setMessage, messageType } = useContext(MessageContext);

  setTimeout(() => {
    setMessage(null);
  }, 7000);

  return (
    <>
    <div className={messageType === 'warning' ? `warning` : `success`}>{message}</div>
    </>
  )
}

export default Message;