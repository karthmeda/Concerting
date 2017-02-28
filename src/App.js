import React, { Component } from 'react';
import Input from './components/Input';
import Events from './components/Events';
import EventFeed from './components/EventFeed';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
  super();
  this.state= {
    zipcode:null
  }
  this.getEvents = this.getEvents.bind(this);
  this.addEvent = this.addEvent.bind(this);
}

  getEvents(zip) {
    axios({
      method: 'GET',
      url: `http://api.jambase.com/events?zipCode=${zip}&page=0&api_key=qzkxpjpx99tzazg3jubf7ts4`,
    }).then((res) => {
      console.log(res.data);
      this.setState({
        events:res.data.Events
      })
    })
  }


  addEvent() {
    if(this.state.events){
      if (this.state.events.length==0) {
      return (<h2><center>Please Enter a valid 5 digit US zip code, Thanks!</center></h2>)
      }

      let feed=(this.state.events)
      .map((event) => {
        return (
          <Events
            eachEvent={event}

             />
              )
      })
      return feed;
    }


  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1>CONCERTING</h1>
          <h3>Let's see what's jammin near you today!</h3>
        </div>
        <br/>
        <Input getEvents={this.getEvents}  />
        <h6>Enter a valid US zipcode please </h6>
        <div className="feed-list">
          <br/>
        <EventFeed
          id='eventfeed'
          addEvent={this.addEvent}
          />
        </div>
      </div>
    );
  }
}


export default App;
