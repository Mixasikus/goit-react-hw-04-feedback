import React, { Component } from 'react';
import Statistics from 'components/FeedBack/Statistics';
import FeedbackOptions from 'components/FeedBack/FeedbackOptions';
import Section from 'components/FeedBack/Section';
import Notification from './Notification';
import { ContainerFeedBack } from './FeedBack.module';

export default class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => {
      return acc + val;
    });
  };

  countPositiveFeedbackPercentage = () => {
    const total = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(total) >= 0 ? Math.round(total) : 0;
  };

  onLeaveFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  render() {
    const state = this.state;
    const options = Object.keys(this.state);

    return (
      <ContainerFeedBack>
        <Section>
          Please leave feedback
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section>
          Statistics
          {this.countTotalFeedback() ? (
            <Statistics
              total={this.countTotalFeedback()}
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </ContainerFeedBack>
    );
  }
}
