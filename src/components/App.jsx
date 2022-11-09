import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState(prevState => {
      return { [e]: prevState[e] + 1 };
    });
  };
  countTotalFeedback = (x, y, z) => {
    return x + y + z;
  };
  countPositiveFeedbackPercentage = (x, y, z) => {
    return ((x / (x + y + z)) * 100).toFixed(0);
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(good, neutral, bad)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              good,
              neutral,
              bad
            )}
          />
        </Section>
      </div>
    );
  }
}

export default App;
