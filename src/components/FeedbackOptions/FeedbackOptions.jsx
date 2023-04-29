const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={() => onLeaveFeedback('good')}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={() => onLeaveFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={() => onLeaveFeedback('bad')}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
