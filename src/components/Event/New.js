import React, { Component } from 'react';
import firebase from 'firebase';
import moment from 'moment';
import axios from 'axios';

import Navbar from '../Common/Navbar';
import Map,{GoogleApiWrapper} from '../Map';
import Marker from '../Marker';
import DatePicker from 'react-datepicker';
import { loadState, deleteState } from '../../lib/localStorage';
import 'react-datepicker/dist/react-datepicker.css';

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
      lat: '',
      long: '',
      auth: {},
      data: [],
      startDate: moment(),
      selectGameKey: '',
      formErrors: {title: '', numberOfMember: '', game: '', lat: '', long: ''},
      titleValidate: false,
      numberOfMemberValidate: false,
      gameValidate: false,
      formValid: false,
      latValidate: false,
      longValidate: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
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

   handleChangeDate(date) {
    this.setState({
      startDate: date
    });
  }

  validateField(fieldName, value) {
    console.log(`validateField ${fieldName} :: ${value} `)
    let fieldValidationErrors = this.state.formErrors;
    let titleValidate = this.state.titleValidate;
    let numberOfMemberValidate = this.state.numberOfMemberValidate;
    let gameValidate = this.state.gameValidate;
    let latValidate = this.state.latValidate;
    let longValidate = this.state.longValidate;

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
        gameValidate = value !== ''
        fieldValidationErrors.game = gameValidate ? '' : 'please select';
        break
      case 'lat':
        latValidate = value !== ''
        fieldValidationErrors.lat = latValidate ? '' : 'is empty';
        break
      case 'long':
        longValidate = value !== ''
        fieldValidationErrors.long = longValidate ? '' : 'is empty';
        break
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      titleValidate,
      numberOfMemberValidate,
      gameValidate,
      latValidate,
      longValidate
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.titleValidate &&
      this.state.numberOfMemberValidate &&
      this.state.gameValidate &&
      this.state.latValidate &&
      this.state.longValidate
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
      dateStart: this.state.startDate,
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
      <div className="content">
        <Navbar />
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                New event
              </h1>
              <h2 className="subtitle">
                Tell world which game I would like to play with other.
              </h2>
            </div>
          </div>
        </section>
        <div className="containers" style={{padding: '20px'}}>
          <div className="columns">
            <div className="column is-three-quarters">
              <div className="field">
                <label className="label">
                  <span style={{color: '#ff0000'}}>*</span> TITLE
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
                  <span style={{color: '#ff0000'}}>*</span> NUMBER OF MEMBER
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
                  <span style={{color: '#ff0000'}}>*</span> GAME
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
                <label className="label">DESCRIPTION</label>
                <p className="control">
                  <textarea
                    className="textarea"
                    placeholder="Say something about detail"
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                  >
                  </textarea>
                </p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-three-quarters">
              <label className="label">
                <span style={{color: '#ff0000'}}>*</span> DATE START
              </label>
              <DatePicker
                className="input is-one-quarters"
                selected={this.state.startDate}
                onChange={this.handleChangeDate}
              />
            </div>
          </div>

          
          <div className="columns field is-horizonta">
            <div className="column is-one-quarters">
              <div className="field">
                <label className="label">
                  <span style={{color: '#ff0000'}}>*</span> LATITUDE
                </label>
                <p className="control">
                  <input
                    required
                    className={`input ${this.errorClass(this.state.formErrors.lat)}`}
                    type="text"
                    placeholder="13.xxxxxx"
                    value={this.state.lat}
                    name="lat"
                    onChange={this.handleChange} 
                  />
                </p>
              </div>
            </div>

            <div className="column is-one-quarters">
              <div className="field">
                <label className="label">
                  <span style={{color: '#ff0000'}}>*</span> LONGITUDE
                </label>
                <p className="control">
                  <input
                    required
                    className={`input ${this.errorClass(this.state.formErrors.long)}`}
                    type="text"
                    placeholder="100.xxxxxx"
                    value={this.state.long}
                    name="long"
                    onChange={this.handleChange} 
                  />
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
        <center>
          <button className="button is-primary" onClick={this.onClickSubmit} disabled={!this.state.formValid}>Save</button>
        </center>
      </div>
    );
  };
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMKm8sG8J_fYSLGf3oxUNfNLNM2SvRr2c"
})(New);

