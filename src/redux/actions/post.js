import * as types from "./types"
import * as api from "../../api/index"

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    dispatch({
      type: types.FETCH_POSTS,
      payload: response.data,
    })
  } catch (error) {
    console.log(error);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.createPost(post);
    dispatch({
      type: types.CREATE_POST,
      payload: response.data
    })
  } catch (error) {
    console.log(error);
  }
}


export const fetchSinglePost = (id) => async (dispatch) => {
  try {
    const response = await api.fetchSinglePost(id);
    dispatch({
      type: types.FETCH_SINGLE_POST,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    dispatch({
      type: types.DELETE_POST,
      payload: data._id,
    });
  } catch (error) {
    console.log(error);
  }
};