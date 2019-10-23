import {SEARCH, SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_SELECT} from './search-actions';

const initState = {
  isLoading: false,
  searchString: '',
  searchResults: [],
  error: '',
  selectedKey: '215854',
  selectedCity: 'Tel Aviv'
};

export default function search(state = initState, action) {
  switch (action.type) {
    case SEARCH:
    case SEARCH_SUCCESS:
    case SEARCH_FAIL:
    case SEARCH_SELECT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return {
        ...state
      };
  }
}
