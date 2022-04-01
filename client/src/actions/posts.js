import * as api from '../api';

export const getPost = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({type: "FETCH_ALL", paylaod: data });

    } catch (error) {
        console.log(error.message);
    }

    
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', paylaod: data});
    } catch (error) {
        console.log(error);
    }
};