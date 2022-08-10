import { useState, createContext } from 'react';


const MessageContext = createContext([]);


export const MessageProvider = ({children}) => {
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('warning');
  
  
  return (
    <MessageContext.Provider value={{message, setMessage, messageType, setMessageType}}>
      {children}
    </MessageContext.Provider>
  )
}


export default MessageContext;
