import React, { Component } from 'react';

class AddArticle extends Component {
constructor(){
  super();
  this.state = {
    newArticle: {}
  }
}

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newArticle: {
        title: this.refs.title.value,
        domain: this.refs.domain.value,
        votes: this.refs.votes = 0
      }}, function(){
        this.props.addArticle(this.state.newArticle);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Add Arcticle</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" className="form-control" />
          </div>
          <div>
            <label>Domain</label><br />
            <input type="text" ref="domain" className="form-control" />
          </div>
          <br />
          <input type="submit" value="Submit" className="btn btn-block btn-success" />
        </form>
      </div>
    );
  }
}

export default AddArticle;
