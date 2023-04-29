import React, { Component } from 'react';
import { Container } from './Container/Container.styled';
// import Feedback from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hadleAddFeedback = status => {
    this.setState(prevState => ({
      [status]: prevState[status] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Please leave feedback</h1>
          <ul>
            <li>
              <button
                type="button"
                onClick={() => this.hadleAddFeedback('good')}
              >
                Good
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => this.hadleAddFeedback('neutral')}
              >
                Neutral
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => this.hadleAddFeedback('bad')}
              >
                Bad
              </button>
            </li>
          </ul>
          <h2>Statistics</h2>
          <ul>
            <li>
              <p>Good: {this.state.good}</p>
            </li>
            <li>
              <p>Neutral: {this.state.neutral}</p>
            </li>
            <li>
              <p>Bad: {this.state.bad}</p>
            </li>
            <li>
              <p>Total: {this.countTotalFeedback()}</p>
            </li>
            <li>
              <p>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%
              </p>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}
