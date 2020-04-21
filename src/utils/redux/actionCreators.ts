// File to store all the actions that can be used => import these and put them in "mapDispatchToProps"
import store from './reducers';

export const updateTitle = (title : string) => {
    store.dispatch(
        {
            type: "UPDATE_TITLE",
            title
        }
    )
}