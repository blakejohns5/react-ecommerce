import Favorites from "../Favorites/Favorites";
import { Link } from 'react-router-dom'



const FavoritesDialog = ({ favState, favDispatch }) => {

  return (
    <>
      <div className="modal fade" id="favoritesDialog" tabIndex="-1" aria-labelledby="favoritesDialogLabel" aria-hidden="true">
        <div className="modal-dialog border-none favorites__dialog">
          <div className="modal-content">
            <div className="modal-header bg-green">
              <div className="fs-5">Don't worry. We'll remember for you!</div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Favorites favState={favState} favDispatch={favDispatch} />
            </div>
            
          </div>
        </div>
      </div>
              3
    </>
  )
}

export default FavoritesDialog;



