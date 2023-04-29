import {
  Button,
  FeedbackOptionsContainer,
  FeedbackOption,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsContainer>
      <FeedbackOption>
        <Button
          color="#00b894"
          type="button"
          onClick={() => onLeaveFeedback('good')}
        >
          Good
        </Button>
      </FeedbackOption>
      <FeedbackOption>
        <Button
          color="#f1c40f"
          type="button"
          onClick={() => onLeaveFeedback('neutral')}
        >
          Neutral
        </Button>
      </FeedbackOption>
      <FeedbackOption>
        <Button
          color="#e74c3c"
          type="button"
          onClick={() => onLeaveFeedback('bad')}
        >
          Bad
        </Button>
      </FeedbackOption>
    </FeedbackOptionsContainer>
  );
};

export default FeedbackOptions;
