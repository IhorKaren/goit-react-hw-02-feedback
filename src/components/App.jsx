import React, { Component } from 'react';
import { Container } from './Container/Container.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

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
          <Section title="Statistics">
            <FeedbackOptions
              onLeaveFeedback={this.hadleAddFeedback}
            ></FeedbackOptions>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          </Section>
        </div>
      </Container>
    );
  }
}
