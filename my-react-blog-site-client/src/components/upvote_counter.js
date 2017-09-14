import React, { Component } from 'react';
import axios from 'axios';
import { FETCH_POST } from '../actions/index.js'

const ROOT_URL = 'http://localhost:3001/api'

class UpVoteCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {

    this.setState({
       count: this.state.count+1
    })
  }

  handleCallApi = () => {
    console.log('a')
    axios.get(`${ROOT_URL}/posts`)
    .then((data) => {
      console.log('b')
      return data.data
    })
    .then(posts => console.log('c', posts))

    console.log('d')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Upvote</button>
        <button onClick={this.handleCallApi}>Call Api</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default UpVoteCounter;
