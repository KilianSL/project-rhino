// File to store all the actions that can be used => import these and put them in "mapDispatchToProps"
import store from './reducers';

export const updateTitle = (title : string) => (
        {
            type: "UPDATE_TITLE",
            title
        }
)

export const toggleCreatePost = () => (
    store.dispatch(
        {
        type: "TOGGLE_CREATE_POST_DIALOG"
        }
    )
)