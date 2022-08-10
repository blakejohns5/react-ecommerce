import { useContext } from 'react';
import MessageContext from '../../context/MessageProvider';


function Message() {
  const { Message } = useContext(MessageContext);
console.log(Message)

  return (
    <>
    <div>{Message}</div>
    </>
    
  )
}

export default Message