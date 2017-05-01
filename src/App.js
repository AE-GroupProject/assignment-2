import React, { Component } from 'react';
import Articles from './Components/Articles';
import AddArticle from './Components/AddArticle';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: []
    }
  }

  componentWillMount(){
    this.setState({articles: [
      {
        title: 'Google',
        domain: 'https://www.google.ie/',
        votes: 10
      },
      {
        title: 'YouTube',
        domain: 'https://www.youtube.com/',
        votes: 5
      },
      {
        title: 'IT Sligo',
        domain: 'https://www.itsligo.ie/',
        votes: 7
      }
    ]})
  }

  handleAddArticle(article){
    let articles = this.state.articles;
    articles.push(article);
    this.setState({articles: articles});
  }

  handleVoteUp(article){
    console.log('+');
  }

  handleVoteDown(article){
    console.log('-');
  }

  render() {
    return (
      <div className="App">
        <div className="addArticleContainer">
          <AddArticle addArticle={this.handleAddArticle.bind(this)} />
        </div>
        <div className="articleList">
          <Articles articles={this.state.articles.sort(function(a,b){
            return (b.votes - a.votes);
          })} onVoteUp={this.handleVoteUp.bind(this)} onVoteDown={this.handleVoteDown.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
