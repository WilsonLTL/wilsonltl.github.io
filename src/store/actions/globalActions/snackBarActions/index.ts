export const OPEN_SNACK_BAR = "OPEN_SNACK_BAR"
export const CLOSE_SNACK_BAR = "CLOSE_SNACK_BAR"
export const UPDATE_SNACK_BAR =  "UPDATE_SNACK_BAR"

export const openSnackBar = () => ({
    type: OPEN_SNACK_BAR
});

export const closeSnackBar = () => ({
    type: CLOSE_SNACK_BAR
});

export const updateSnackBar = () => ({
    type: UPDATE_SNACK_BAR
})
