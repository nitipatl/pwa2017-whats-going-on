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
                  <input className="input" type="text" placeholder="Title" />
                </p>
              </div>
            </div>
          </div>

          <div className="columns field is-horizonta">
            <div className="column is-one-quarters">
              <div className="field">
                <label className="label">Subject</label>
                <p className="control">
                  <span className="select">
                    <select>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
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
                    <select>
                      <option>WARCAFT</option>
                      <option>DOTA2</option>
                      <option>KAKERLAKEN POKER</option>
                      <option>catan</option>
                      <option>uno spin</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="column is-one-quarters">
              <div className="field">
                <label className="label">Number Of Member</label>
                <p className="control">
                  <input className="input" type="text" placeholder="Text input" />
                </p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-three-quarters">
              <div className="field">
                <label className="label">Description</label>
                <p className="control">
                  <textarea className="textarea" placeholder="Textarea"></textarea>
                </p>
              </div>
            </div>
          </div>
          
          <a className="button is-primary">Save</a>
        </div>
      </div>
    );
  };
}

export default New;
