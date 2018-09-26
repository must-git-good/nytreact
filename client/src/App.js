import React, { Component } from 'react';
import Jumbotron from './components/jumbotron';
import SearchForm from './components/search-form';
import ResultsCard from './components/results';
import Articles from './components/saved-articles';
import API from './utils/API';

class App extends Component {

  state = {
    articles: [""]
  }

  summonArticles = (topic,yearStart,endStart) => {
      API.getArticles(topic,yearStart,endStart)
      .then(res => {
        this.setState({
          articles: res
        });
        console.log(this.state.articles);
        console.log(this.state.articles.data);
        console.log(this.state.articles.data.response.docs);
      })
      .catch(err => console.log("Error in API getArticle call: ",err));
  }

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <SearchForm clickHandler={this.summonArticles} />
        <ResultsCard value={this.state.articles} > 
        
        </ResultsCard>
        <Articles/>
      </div>
    );
  }
}

export default App;
