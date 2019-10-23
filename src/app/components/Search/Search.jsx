import React from 'react';

import './index.css';

const Search = props => {
  const {searchResults, search, select} = props;
  const [value, setValue] = React.useState('');
  const searchResultsNode = searchResults.map((item) =>
    <div
      onClick={() => select(item.Key, item.LocalizedName)}
      key={item.Key}
      className='search-app__option'
    >{item.LocalizedName}</div>);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return <div className='search-app'>
    <div className='search-app__wrapper'>
      <input
        value={value}
        onChange={handleChange}
        className='search-app__input'
      />
      <div className='search-app__icon' onClick={() => search(value)}>
        <i className='material-icons'>search</i>
      </div>
    </div>
    <div className='search-app__results'>
      {searchResultsNode}
    </div>
  </div>;
};

export default Search;
