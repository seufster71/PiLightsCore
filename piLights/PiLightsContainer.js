import React, { Component } from 'react';
import PiLights from './../../piSwitchViews/PiLights.js'
// test
export default class PiLightsContainer extends Component {
	  constructor(props) {
	    super(props);

	    this.onButtonPress = this.onButtonPress.bind(this);
	  }

	  onButtonPress(param) {

		  console.log("pros " + param)
		  fetch('http://10.0.1.30:8090/api/public/callService',{
			  method: 'POST',
			  headers: {
			      "Content-type": "application/json"
			    },
			  body: JSON.stringify({params:{action:param}})
		  })
		  .then(function(data) {
			  console.log('Request succeeded with JSON response', data);
		  })
		  .catch(function(error) {
			  console.log('Request failed', error);
		  });
	  };

	  render() {
		    return (
		    	<PiLights onClick={this.onButtonPress}/>
		    );
	  }
}
