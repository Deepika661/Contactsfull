import { combineReducers } from 'redux';
import post from './post';
import comment from './comment';
import category from './category';
import ordering from './ordering';

export default combineReducers({
		  posts: post,
		  comments: comment,
		  categories: category,
		  order: ordering
		});
