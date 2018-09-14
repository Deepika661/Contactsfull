import { defaultCounter } from '../utils/configure';
import { UPDATE_COUNTER } from '../actions/action';


export default function(state = defaultCounter, action) {

  switch (action.type) {
  	
	    case UPDATE_COUNTER:
	      return action.value;

	    default:
	      return state;
  }
}
