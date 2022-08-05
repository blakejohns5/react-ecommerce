import { useState, useContext } from 'react'
import AuthContext from '../../context/AuthProvider';
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { fetchData, putUser, USERS_URL } from '../../helpers/apis'


function ChangePwdDialog() {
  const { auth } = useContext(AuthContext)
  // const [ oldPwdRef ] = useRef();
  const [ oldPwd, setOldPwd ] = useState();
  const [ newPwd, setNewPwd ] = useState();
  const [ oldPwdVisible, setOldPwdVisible ] = useState(false);
  const [ newPwdVisible, setNewPwdVisible ] = useState(false);

  const toggleOldPwd = () => {
    setOldPwdVisible(oldPwdVisible ? false : true);
  }
  const toggleNewPwd = () => {
    setNewPwdVisible(newPwdVisible ? false : true);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('hello world')
    const users = await fetchData(USERS_URL)
    const user = users.find((user) => user.email === auth.email);
    console.log(users, user)
    const changedUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: newPwd
    }
    if (user.password === oldPwd) {
      putUser(`${USERS_URL}/${user.id}`, changedUser)
    }
  }

  return (
    <>
      <div className="modal fade" id="changePwdDialog" tabIndex="-1" aria-labelledby="changePwdDialogLabel" aria-hidden="true">
        <div className="modal-dialog dialog__login p-1 ">
          <div className="modal-content ">
              <div className="modal-header">
                <h5 className="modal-title" id="changePwdDialogLabel">Change your password</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <div className="modal-body">
              <form id="changePwdForm" onSubmit={handleSubmit} className="ms-3 d-flex flex-column gap-3" >
                <div className="row">
                  <label htmlFor="changePwdEmail "className="col-4">Email:</label>
                  <input type="email" id="changePwdEmail" className="col-7 w-50" value={auth.email} readOnly />
                </div>
                <div className="row d-flex">
                  <label htmlFor="changePwdPassword" className="col-4">Current password:</label>
                  <input type={oldPwdVisible ? "text" : "password"} id="confirmPassword" className="col-7 w-50" onChange={(e) => setOldPwd(e.target.value)} required />
                  <button type="button" onClick={toggleOldPwd} className="btn-pw col-1">{oldPwdVisible ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                <div className="row d-flex">
                  <label htmlFor="newPassword" className="col-4">New password:</label>
                  <input type={newPwdVisible ? "text" : "password"} id="newPassword" className="col-7 w-50" onChange={(e) => setNewPwd(e.target.value)}  required />
                  <button type="button" onClick={toggleNewPwd} className="btn-pw col-1">{newPwdVisible ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
              </form>

            </div>
            <div className="modal-footer d-flex align-items-center justify-content-center mt-3 gap-4">
              <button type="submit" form="changePwdForm" className="btn-cart" data-bs-dismiss="modal">Confirm change</ button>
              <button type="button" className="btn-cart" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangePwdDialog
