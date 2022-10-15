import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ButtonWrapper, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(option => {
        const btnId = nanoid();
        return (
          <FeedbackButton
            type="button"
            key={btnId}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </ButtonWrapper>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
