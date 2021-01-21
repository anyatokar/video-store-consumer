import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

const Search = (props) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  
  return (
    <div className="App">
      <header>
        <h1>Search Video library</h1>
      </header>
      <SearchBar searchQuery={searchQuery}
                 setSearchQuery={setSearchQuery}/>
      <VideoList keyWord={searchQuery}
                 url={props.url}
                 focus={props.focus}/>
    </div>
  );
}

Search.propTypes = {
  url:PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
};

export default Search;
