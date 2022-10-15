import Notification from '../notificationComponent';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total() > 0 ? (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()}</li>
      <li>
        Positive feedback:
        {positivePercentage()}%
      </li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

export default Statistics;
