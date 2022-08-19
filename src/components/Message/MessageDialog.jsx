import Message from './Message';


const MessageDialog = () => {
  return (
    <>
    <div className="modal " id="messageModal" tabIndex="1000" aria-labelledby="messageModalLabel" aria-hidden="true">
      <div className="modal-dialog dialog-message">
        <div className="modal-content">
          <div className="modal-header">       
            <Message />   
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-cart" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default MessageDialog;