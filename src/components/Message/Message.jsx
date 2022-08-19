import { useContext } from 'react';
import MessageContext from '../../context/MessageProvider';


function Message() {
  const { message, messageType } = useContext(MessageContext);

  return (
    <>
    <div className={messageType === 'warning' ? `warning` : `success`}>{message}</div>
    </>
  )
}

export default Message;