import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

class Articles extends Component {

  voteUp(article){
    this.props.onVoteUp(article);
    //console.log(this.props.article.votes);
  }

  voteDown(article){
    this.props.onVoteDown(article);
    //console.log(this.props.article.votes);
  }

  render() {
    let articleItems;
    if(this.props.articles){
      articleItems = this.props.articles.map(article => {
        return(
          <ArticleItem onVoteUp={this.voteUp.bind(this)} onVoteDown={this.voteDown.bind(this)} key={article.title} article={article}/>
        )
      });
    }
    return (
      <div className="Articles">
        {articleItems}
      </div>
    );
  }
}

export default Articles;
