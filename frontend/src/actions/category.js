import { get } from '../utils/helpers';
import { FETCH_CATEGORIESAREA } from './action';
import * as Api from '../utils/Api';



export const fetchCategoriesArea = () =>
		 dispatch =>
		  Api.getCategories().then(payload =>
		  dispatch(get(FETCH_CATEGORIESAREA, payload))
	  );
