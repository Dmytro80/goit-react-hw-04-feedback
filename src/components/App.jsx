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

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((total, value) => {
      return total + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const value = Math.round((100 / (good + neutral + bad)) * good);
    if (value > 0) {
      return value;
    }
    return '0';
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
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>
            Positive feedback:
            {this.countPositiveFeedbackPercentage()}%
          </li>
        </ul>
      </div>
    );
  }
}
