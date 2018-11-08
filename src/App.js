import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import GiphList from './GiphList/GiphList';
import './App.css';

var giphy = require('giphy-api')();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { giphs: [] };

  }

  giphySearch = (keyword) => {
    giphy.search(keyword, (err, res) => {
      if (res && res.data) {
        const giphs = res.data
        console.log(giphs)
        this.setState({ giphs });
      }
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
            <h1>Giphyx</h1>
        </header>
        <div>
          <SearchBar 
            searchCallback={(keyword) => this.giphySearch(keyword)} />
          <GiphList giphs={this.state.giphs} />
        </div>
      </div>
    );
  }

}

export default App;
