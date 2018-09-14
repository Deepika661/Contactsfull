import { FETCH_CATEGORIESAREA } from '../actions/action';
import { basicCategory } from '../utils/configure';


export default function(state = [], action) {
	  
	  switch (action.type) {

	    case FETCH_CATEGORIESAREA:
	      return [
	      basicCategory, 
	      ...action.payload.categories
	      ];
	    default:
	      return state;
	  
	  }
}