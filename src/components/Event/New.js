import React, { Component } from 'react';
import firebase from 'firebase';
import moment from 'moment';
import axios from 'axios';

import Navbar from '../Common/Navbar';
import Map,{GoogleApiWrapper} from '../Map';
import Marker from '../Marker';
import { loadState, deleteState } from '../../lib/localStorage';

class New extends Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: "AIzaSyAMKm8sG8J_fYSLGf3oxUNfNLNM2SvRr2c",
      authDomain: "pwa2017-whats-going-on.firebaseapp.com",
      databaseURL: "https://pwa2017-whats-going-on.firebaseio.com",
      projectId: "pwa2017-whats-going-on",
      storageBucket: "pwa2017-whats-going-on.appspot.com",
      messagingSenderId: "1042397826782"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    this.state = {
      title: '',
      game: '',
      numberOfMember: '',
      description: '',
      auth: {},
      data: [],
      selectGameKey: '',
      formErrors: {title: '', numberOfMember: '', game: ''},
      titleValidate: false,
      numberOfMemberValidate: false,
      gameValidate: false,
      formValid: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this._fetchData()
    const auth = loadState('auth')
    if(auth !== undefined) {
      this.setState({
        auth
      })
    }
  }

  _fetchData() {
    axios.get('https://pwa2017-whats-going-on.firebaseio.com/ListGame.json')
      .then((response) => {
        this.setState({ 
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    }, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    console.log(`validateField ${fieldName} :: ${value} `)
    let fieldValidationErrors = this.state.formErrors;
    let titleValidate = this.state.titleValidate;
    let numberOfMemberValidate = this.state.numberOfMemberValidate;
    let gameValidate = this.state.gameValidate;

    switch(fieldName) {
      case 'title':
        titleValidate = value !== ''
        fieldValidationErrors.title = titleValidate ? '' : ' is empty';
        break;
      case 'numberOfMember':
        numberOfMemberValidate = value !== ''
        fieldValidationErrors.numberOfMember = numberOfMemberValidate ? '' : ' is empty';
        break
      case 'game':
        console.log('game ', value);
        gameValidate = value !== ''
        fieldValidationErrors.game = gameValidate ? '' : 'please select';
        break
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      titleValidate,
      numberOfMemberValidate,
      gameValidate,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.titleValidate &&
      this.state.numberOfMemberValidate &&
      this.state.gameValidate
    }, () => console.log(this.state.numberOfMemberValidate));
  }

  onClickSubmit = () => {
    const database = firebase.database();
    const gameObject = this.state.data.find(item => item.name === this.state.game);
    const objectToSave = {
      title: this.state.title,
      descriptions: this.state.description,
      cood_x: 100.4660867,
      cood_y: 13.7138229,
      categories: ['co-op', 'board', 'Adventure', 'party'],
      createAt: moment().format('DD/MM/YYYY, h:mm:ss a'),
      createBy: this.state.auth.email,
      game: gameObject || {},
      members: [{name: 'Khing', token: 'cxasdadsadsdad', image: 'http://static.goal.com/4323400/4323432_news.jpg'}],
      name: this.state.auth.name,
      numberOfUsers: this.state.numberOfMember,
    }
    database.ref('/Pin').push(objectToSave);
  }
  
  renderListGame = () => (
    this.state.data.map((item, index) => {
       return (
        <option value={item.name} key={index}>{item.name}</option>
       )
    })
  );

  errorClass(error) {
    return(error.length === 0 ? '' : 'is-danger');
  }

  render() {
    return (
      <div class="content">
        <Navbar />
        <div className="containers">
          <div className="columns">
            <div className="column is-three-quarters">
              <div className="field">
                <label className="label">
                  <span style={{color: '#ff0000'}}>*</span> Title
                </label>
                <p className="control">
                  <input
                    required
                    className={`input ${this.errorClass(this.state.formErrors.title)}`}
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    name="title"
                    onChange={this.handleChange} 
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="columns field is-horizonta">
            <div className="column is-one-quarters">
              <div className="field">
                <label className="label">
                  <span style={{color: '#ff0000'}}>*</span> Number Of Member
                </label>
                <p className="control">
                  <input
                    required
                    className={`input ${this.errorClass(this.state.formErrors.numberOfMember)}`}
                    type="text"
                    placeholder="Number Of Member"
                    value={this.state.numberOfMember}
                    name="numberOfMember"
                    onChange={this.handleChange} 
                  />
                </p>
              </div>
            </div>
            <div className="column is-one-quarters">
              <div className="field">
                <label className="label">
                  <span style={{color: '#ff0000'}}>*</span> Game
                </label>
                <p className="control">
                  <span className={`select ${this.errorClass(this.state.formErrors.game)}`}>
                    <select
                      name="game"
                      onChange={this.handleChange}
                      value={this.state.game}
                    >
                      <option value="">none</option>
                      {this.renderListGame()}
                    </select>
                  </span>
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
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                  >
                  </textarea>
                </p>
              </div>
            </div>
          </div>

          <label className="label" style={{marginBottom: 20,}}>Pick up location</label>
          <div className="columns" style={{height: 400, marginBottom: 20,}}>
            <Map google={this.props.google}
              style={{width: '100%', height: '400px', position: 'relative'}}
              className={'map'}
              zoom={14}
              containerStyle={{}}
              centerAroundCurrentLocation={true}
              onClick={this.onMapClicked}
              onDragend={this.onMapMoved} />
          </div>
        </div>
        <button className="button is-primary" onClick={this.onClickSubmit} disabled={!this.state.formValid}>Save</button>
      </div>
    );
  };
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMKm8sG8J_fYSLGf3oxUNfNLNM2SvRr2c"
})(New);

