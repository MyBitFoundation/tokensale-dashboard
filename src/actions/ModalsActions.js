
class ModalsActions {
    static openModal(modal) {
        return (dispatch, getState) => {
            dispatch({
                type: 'OPEN_MODAL',
                payload: modal
            });
        }
    }
    static closeModal(modal) {
        return (dispatch, getState) => {
            dispatch({
                type: 'CLOSE_MODAL'
            });
        }
    }
}

export default ModalsActions;
