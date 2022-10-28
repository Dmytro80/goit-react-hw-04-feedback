import React, { useState } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(state);

  const { good, neutral, bad } = state;

  const handleIncrement = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(state);
    return values.reduce((total, value) => {
      return total + value;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = state;

    return Math.round((100 / (good + neutral + bad)) * good);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
};
