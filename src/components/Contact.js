import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    e.preventDefault();
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const header = this.state.authorized ? 'Contact' : 'Enter the password';

    const login = (
      <form onSubmit={this.authorize}>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="Password" />
        <input type="submit" value="Submit" />
      </form>
    );

    const contactInfo = (
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    );

    return (
      <div id="authorization">
        <h1>{header}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

export default Contact;