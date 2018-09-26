import React, { Component } from 'react';
import Jumbotron from './components/jumbotron';
import SearchForm from './components/search-form';
import ResultsCard from './components/results';
import Articles from './components/saved-articles';
import API from './utils/API';

class App extends Component {

  state = {
    articles: []
  }

  summonArticles = (topic,yearStart,endStart) => {
      API.getArticles(topic,yearStart,endStart)
      .then(res => {
        this.setState({
          articles: res
        });
        console.log(this.state.articles);
      })
      .catch(err => console.log("Error in API getArticle call: ",err));
  }

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <SearchForm clickHandler={this.summonArticles} />
        <ResultsCard>   </ResultsCard>
        <Articles/>
      </div>
    );
  }
}

export default App;
