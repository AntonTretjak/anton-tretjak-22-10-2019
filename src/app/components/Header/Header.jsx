import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './index.css';

const Header = props => {
  return <div className='main-header'>
    {props.isError && <span className='error'>Error</span>}
    <div className='main-header__logo'>
      <span>Herolo Weather Task</span>
    </div>
    <div className='main-header__nav'>
      <Link to='/anton-tretjak-23-10-2019'>Home</Link>
      <Link to='/anton-tretjak-23-10-2019/favorites'>Favorites</Link>
    </div>
  </div>;
};

const mapStateToProps = state => ({
  isError: state.favoritesCitiesData.error || state.forecastData.error || state.favoritesCitiesData.error
});

export default connect(
  mapStateToProps,
  null
)(Header);


// export default Header;
