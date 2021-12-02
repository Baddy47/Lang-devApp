const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                name: 'Mark',
                message: state.newTextData,
                likeCounts: 0
            };
            state.postData.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newTextData = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostAction = () => ({type: ADD_POST});
export const updateNewPostTextAction = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;