import { get } from '../utils/helpers';
import { FETCH_POSTSAREA, DELETE_POSTSAREA, UPDATE_POSTSAREA, ADD_POSTSAREA } from './action';
import * as Api from '../utils/Api';

  export const fetchPostsArea = () => dispatch =>
      Api.getPosts()
      .then(payload => 
      dispatch(get(FETCH_POSTSAREA, payload))
      );

export const deletePostsArea = post => dispatch =>
    Api.deletePost(post.id)
    .then(res => {

      if (res.status === 200) 
      {
        dispatch({
          type: DELETE_POSTSAREA,
          value: post
              });
          }
      });

export const votePost = (id, option) => dispatch =>
    Api.votePost(id, option)
    .then(payload =>
      dispatch(get(UPDATE_POSTSAREA, payload))
    );

export const getPost = id => dispatch =>
    Api.getPost(id)
    .then(payload => 
    dispatch(get(UPDATE_POSTSAREA, payload)));

export const addPostsArea = post => dispatch =>
    Api.addPost(post)
    .then(payload => {
      dispatch({
            type: ADD_POSTSAREA,
            payload
          });
        });

export const updatePostsArea = post => dispatch =>
  Api.editPost(post)
    .then(payload => 
    dispatch(get(UPDATE_POSTSAREA, payload))
    );
