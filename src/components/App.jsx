import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          {options.map(option => {
            return (
              <button
                type="button"
                key={option}
                onClick={() => this.handleIncrement(option)}
              >
                {option}
              </button>
            );
          })}
        </div>

        <h2>Statistics</h2>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
      </div>
    );
  }
}
