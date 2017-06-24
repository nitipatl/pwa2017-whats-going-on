import React, { Component } from 'react';
import firebase from 'firebase';
import Navbar from '../Common/Navbar';

class New extends Component {
  constructor(props) {
    super(props);

    // var config = {
    //   apiKey: "<API_KEY>",
    //   authDomain: "<PROJECT_ID>.firebaseapp.com",
    //   databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    //   storageBucket: "<BUCKET>.appspot.com",
    // };
    // firebase.initializeApp(config);
    this.state = {
      title: '',
      member: '',
      game: '',
      numberOfMember: '',
      description: '',
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onHandleSelectedMemberChange = this.onHandleSelectedMemberChange.bind(this);
    this.onHandleSelectedGameChange = this.onHandleSelectedGameChange.bind(this);
    this.onHandleNumberOfMemberChange = this.onHandleNumberOfMemberChange.bind(this);
    this.onHandleDescriptionChange = this.onHandleDescriptionChange.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value,
    })
  }

  onHandleSelectedMemberChange(event) {
    this.setState({
      member: event.target.value,
    })
  }

  onHandleSelectedGameChange(event) {
    this.setState({
      game: event.target.value,
    })
  }

  onHandleNumberOfMemberChange(event) {
    this.setState({
      numberOfMember: event.target.value,
    })
  }

  onHandleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    })
  }

  onClickSubmit = () => {
    console.log('submit');
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="containers">
          <div className="columns">
            <div className="column is-three-quarters">
              <div className="field">
                <label className="label">Title</label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onTitleChange} 
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="columns field is-horizonta">
            <div className="column is-one-quarters">
              <div className="field">
                <label className="label">Members</label>
                <p className="control">
                  <span className="select">
                    <select
                      onChange={this.onHandleSelectedMemberChange}
                      value={this.state.member}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="column is-one-quarters">
              <div className="field">
                <label className="label">Game</label>
                <p className="control">
                  <span className="select">
                    <select 
                      onChange={this.onHandleSelectedGameChange}
                      value={this.state.game}
                    >
                      <option value="WARCAFT">WARCAFT</option>
                      <option value="DOTA2">DOTA2</option>
                      <option value="KAKERLAKEN POKER">KAKERLAKEN POKER</option>
                      <option value="catan">catan</option>
                      <option value="uno spin">uno spin</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="column is-one-quarters">
              <div className="field">
                <label className="label">Number Of Member</label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    onChange={this.onHandleNumberOfMemberChange}
                    value={this.state.numberOfMember}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-three-quarters">
              <div className="field">
                <label className="label">Description</label>
                <p className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    onChange={this.onHandleDescriptionChange}
                    value={this.state.description}
                  >
                  </textarea>
                </p>
              </div>
            </div>
          </div>
          
          <a className="button is-primary" onClick={this.onClickSubmit}>Save</a>
        </div>
      </div>
    );
  };
}

export default New;
