import {connect} from 'react-redux';
import Search from '../../components/Search/Search';
import {search, selectResult} from '../../../store/reducers/search-results/search-actions';

const mapStateToProps = (state) => ({
  error: state.search.error,
  searchResults: state.search.searchResults
});


const mapDispatchToProps = dispatch => ({
  search: (searchString) => {
    dispatch(search(searchString));
  },
  select: (key, city) => {
    dispatch(selectResult({key, city}))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
