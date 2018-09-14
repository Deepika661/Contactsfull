import {
  FETCH_POSTSAREA,
  DELETE_POSTSAREA,
  UPDATE_POSTSAREA,
  DELETE_COMMENTSAREA,
  ADD_COMMENTSECTION,
  ADD_POSTSAREA
} from '../actions/action';

export default function(state = [], action) {

      switch (action.type) {

        case FETCH_POSTSAREA:
           return [
           ...action.payload
           ];

        case ADD_POSTSAREA:
            return [
            ...state, action.payload
            ];

        case UPDATE_POSTSAREA:
          return state.map(
            post => (action.payload.id === post.id ?
             action.payload : post)
          );

        case DELETE_POSTSAREA:
          return state.filter(post => post.id !== action.value.id);

        case DELETE_COMMENTSAREA:
          return state.map(post => {
            if (action.payload.parentId === post.id) 
            {
              post.commentCount = post.commentCount - 1;
              return post;
            } 
            else {
              return post;
            }
          });

        case ADD_COMMENTSECTION:
          return state.map(post => {
            if (action.payload.parentId === post.id) 
            {
              post.commentCount = post.commentCount + 1;
              return post;
            } else {
              return post;
            }
          });

        default:
          return state;
      }
}
