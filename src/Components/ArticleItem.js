import React, { Component } from 'react';

class ArticleItem extends Component {

  voteUp(article){
    //console.log(this.props.article.votes);
    this.props.onVoteUp(article);
  }

  voteDown(article){
    //console.log(this.props.article.votes);
    this.props.onVoteDown(article);
  }

  render() {
    return (
      <div className="Article">
          <div className="row">
          <div className="col-sm-3">
            <div className="scoreBoard">
              <h1>{this.props.article.votes}</h1>
              <h5>POINTS</h5>
            </div>
          </div>
          <div className="col-sm-9">
            <h2><p>{this.props.article.title}</p></h2>
            <h6><a href={this.props.article.domain}>{this.props.article.domain}</a></h6><br/>
            <h4><a href="#" onClick={this.voteUp.bind(this)}><span className="glyphicon glyphicon-arrow-up"></span>upvote</a> <a href="#" onClick={this.voteDown.bind(this)}><span className="glyphicon glyphicon-arrow-down"></span>downvote</a></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleItem;
