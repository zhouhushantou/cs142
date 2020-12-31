import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      stateNow: window.cs142models.statesModel(),
    };
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <ul className=".cs142-states-input">
          {this.state.stateNow.filter(name => name.toLowerCase().includes(this.state.value.toLowerCase())).map(filteredName => (
            <li >
              {filteredName}
            </li>
          ))}
        </ul>
      </div >
    );
  }
}

export default States;
