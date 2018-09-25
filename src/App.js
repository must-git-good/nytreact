import React, { Component } from 'react';
import Jumbotron from './components/jumbotron';
import SearchForm from './components/search-form';
import ResultsCard from './components/results';
import Articles from './components/saved-articles';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <SearchForm />
        <ResultsCard />
        <Articles />
      </div>
    );
  }
}

export default App;
