export const UPDATE_LOADING_STATUS = "UPDATE_LOADING_STATUS"
export const UPDATE_LOADING_MODAL_STATUS = "UPDATE_LOADING_MODAL_STATUS"
export const UPDATE_LOADING_DIALOG_STATUS = "UPDATE_LOADING_DIALOG_STATUS"
export const UPDATE_LOADING_LOGIN_STATUS = "UPDATE_LOADING_LOGIN_STATUS"

export const updateLoadingStatus = () => ({
    type: UPDATE_LOADING_STATUS
});

export const updateLoadingModalStatus = () => ({
    type: UPDATE_LOADING_MODAL_STATUS
});

export const updateLoadingDialogStatus = () => ({
    type: UPDATE_LOADING_DIALOG_STATUS
});

export const updateLoadingLoginStataus = () => ({
    type: UPDATE_LOADING_LOGIN_STATUS
})