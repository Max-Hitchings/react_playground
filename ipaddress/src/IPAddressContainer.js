import React, { Component } from 'react';
import IPAddress from './IPAddress';

var xhr;


class IPAddressContainer extends Component {
  constructor(props, context) {
    super(props, context);

    // Initalize the ip_address state variable
    this.state = {
      ip_address: "..."
    };

    this.processRequest = this.processRequest.bind(this);
  }

  // Once our component is mounted, make the HTTP request and send it off to
  // the ipinfo.io web service.
  componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', "https://ipinfo.io/json", true);
    xhr.send();


    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  // Parse the IP address returned by the web service, assign it to an object
  // called "response", then store the IP address from the response object
  // into the ip_address state variable.
  processRequest() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);

      this.setState({
        ip_address: response.ip
      });
    }
  }

  render() {
    return (
      <div>
        <IPAddress ip={this.state.ip_address} />
      </div>
    )
  }
}

export default IPAddressContainer;
