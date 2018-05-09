import { get } from '../utils/helpers';
import {FETCH_COMMENTSAREA,UPDATE_COMMENTSAREA,DELETE_COMMENTSAREA,ADD_COMMENTSECTION } from './action';
import * as Api from '../utils/Api';


export const fetchCommentsArea = postId => dispatch =>
      Api.getPostComments(postId).then(payload =>
        dispatch(get(FETCH_COMMENTSAREA, { postId, payload }))
      );

export const deleteComment = comment => dispatch =>
      Api.deleteComment(comment.id).then(res => {
        dispatch({
          type: DELETE_COMMENTSAREA,
          payload: comment
        });
      });

export const voteComment = (id, option) => dispatch =>
      Api.voteComment(id, option).then(payload =>
        dispatch(get(UPDATE_COMMENTSAREA, payload))
      );


export const addComment = comment => dispatch =>
      Api.addComment(comment).then(res => {
        dispatch({
          type: ADD_COMMENTSECTION,
          payload: res
        });
      });

export const updateComment = comment => dispatch =>
    Api.editComment(comment).then(payload =>
      dispatch(get(UPDATE_COMMENTSAREA, payload))
    );
