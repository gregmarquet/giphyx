import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  componentDidMount() {
    const keyword = 'cats';
    this.search(keyword);
  }

  handleInputChange = (e) => {
    const keyword = e.target.value;
    this.setState({ term: keyword });
    setTimeout(this.search(keyword), 300);
  }

  search = (keyword) => {
    this.props.searchCallback(keyword);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-input"
          value={this.state.term}
          onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default SearchBar;