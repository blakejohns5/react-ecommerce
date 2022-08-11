import Favorites from "./Favorites";


const FavoritesDialog = ({ favState, favDispatch }) => {

  return (
    <>
      <div className="modal fade" id="favoritesDialog" tabIndex="-1" aria-labelledby="favoritesDialogLabel" aria-hidden="true">
        <div className="modal-dialog dialog-favorites">
          <div className="modal-content">
            <div className="modal-header dialog-favorites__header">
              <div className="dialog-favorites__title">Don't worry. We'll remember for you!</div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body dialog-favorites__body">
              <Favorites favState={favState} favDispatch={favDispatch} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FavoritesDialog;



