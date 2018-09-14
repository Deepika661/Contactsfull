import { UPDATE_COUNTER } from './action';

export const ordering = reorder => dispatch =>
		  dispatch({
		    type: UPDATE_COUNTER,
		    value: reorder
		  });
