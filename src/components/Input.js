import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  keyPress(e) {
    if (e.charCode === 13) {
      this.props.getEvents(this.zipcode.value);
    }
  }

  render(){
    return(
      <div>
          <input
            type = 'text'
            ref={(input) => { this.zipcode = input; }}
            onKeyPress={(e) => this.keyPress(e)}
            placeholder= 'Enter Zipcode to look up events'
          />
          <button className="search"
           onClick={() => this.props.getEvents(this.zipcode.value)}
          >SEARCH</button>
      </div>
      )
  }
}

export default Input;
