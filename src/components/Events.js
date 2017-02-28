import React from 'react';
import axios from 'axios';
import moment from 'moment';

class Events extends React.Component {
  constructor(){
    super();

  }

  canBuy(){
    if(this.props.eachEvent.TicketUrl.length==0){
      return (<p>No website link to buy tickets</p>)

    }
    else{
      return <button className="buy">< a target="_blank" href={this.props.eachEvent.TicketUrl}>Buy Tickets</a></button>
    }
  }

  isthereUrl(){
    if(this.props.eachEvent.Venue.Url==0){
      return (<p>No venue website</p>)

    }
    else{
      return (
        <p><span className="list-field">Venue Website: </span><a target="_blank" href={this.props.eachEvent.Venue.Url}>{this.props.eachEvent.Venue.Url}</a></p>
      )
    }

  }

  regDisplay() {
    const artistsNames = this.props.eachEvent.Artists.map(artist => artist.Name);
    const artists = artistsNames.join(', ');
    return (
      <div>
    <li className="eachLi">
      <span className="list-field">Artist(s): </span>{artists}<br/>
      <span className="list-field">Event Date: </span> {moment(this.props.eachEvent.Date).format('MM/DD/YYYY')}<br/>
      <span className="list-field">Event Time: </span> {moment(this.props.eachEvent.Date).format('hh:mm a')}<br/>
      <br/>
      <span className="list-field">Venue Name: </span> {this.props.eachEvent.Venue.Name}<br/>
      <br/>
      <span className="list-field">Venue Address: </span> {`${this.props.eachEvent.Venue.Address}
      ${this.props.eachEvent.Venue.City}, ${this.props.eachEvent.Venue.StateCode} ${this.props.eachEvent.Venue.ZipCode}`}<br/>
      <br/>
      {this.isthereUrl()}<br/>
      {this.canBuy()}<br/>
      </li>
    </div>
    )
  }
  render() {
      return (
        this.regDisplay()
      );


}

}


export default Events;
