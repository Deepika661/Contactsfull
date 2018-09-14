import {FETCH_COMMENTSAREA,UPDATE_COMMENTSAREA,DELETE_COMMENTSAREA,ADD_COMMENTSECTION} from '../actions/action';

export default function(state = [], action) {

  switch (action.type) {

      case FETCH_COMMENTSAREA:
        return {
            ...state,
            [action.payload.postId]: action.payload.payload
        };

    case UPDATE_COMMENTSAREA:
        return {
          ...state,
          [action.payload.parentId]: state[action.payload.parentId].map(
            comment =>
              action.payload.id === comment.id ? action.payload : comment
          )
      };
    case DELETE_COMMENTSAREA:
        return {
          ...state,
          [action.payload.parentId]: state[action.payload.parentId].filter(
            comment => action.payload.id !== comment.id
          )
      };
    case ADD_COMMENTSECTION:
        return {
          ...state,
          [action.payload.parentId]: [
            ...state[action.payload.parentId],
            action.payload
          ]
        };
      default:
        return state;
    }
}
