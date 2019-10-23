export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = SEARCH + '_SUCCESS';
export const SEARCH_FAIL = SEARCH + '_FAIL';
export const SEARCH_SELECT = SEARCH + '_SELECT';

export function search(searchString) {
  return {
    type: SEARCH,
    payload: {
      searchString,
      isLoading: true,
      error: ''
    }
  };
}

export function searchSuccess(results) {
  return {
    type: SEARCH_SUCCESS,
    payload: {
      isLoading: false,
      searchResults: results,
      searchString: '',
      error: ''
    }
  };
}

export function searchFail(error) {
  return {
    type: SEARCH_FAIL,
    payload: {
      isLoading: false,
      searchResults: [],
      error
    }
  };
}

export function selectResult(payload) {
  return {
    type: SEARCH_SELECT,
    payload: {
      selectedKey: payload.key,
      selectedCity: payload.city,
      isLoading: false,
      searchResults: [],
      error: ''
    }
  }
}
