import React, { useState } from 'react';
import Statistics from 'components/FeedBack/Statistics';
import Section from 'components/FeedBack/Section';
import Notification from './Notification';
import { ContainerFeedBack } from './FeedBack.module';
import Buttons from './Buttons';

export default function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedBack = { good, neutral, bad };

  const countTotalFeedback = () => {
    return Object.values(feedBack).reduce((acc, val) => {
      return acc + val;
    });
  };

  const countPositiveFeedbackPercentage = () => {
    const total = (good * 100) / countTotalFeedback();
    return Math.round(total) >= 0 ? Math.round(total) : 0;
  };

  const handleIncrementGood = () => {
    setGood(state => state + 1);
  };

  const handleIncrementNeutral = () => {
    setNeutral(state => state + 1);
  };

  const handleIncrementBad = () => {
    setBad(state => state + 1);
  };

  return (
    <ContainerFeedBack>
      <Section>
        Please leave feedback
        <Buttons
          onClickGood={handleIncrementGood}
          onClickNeutral={handleIncrementNeutral}
          onClickBad={handleIncrementBad}
        />
      </Section>
      <Section>
        Statistics
        {countPositiveFeedbackPercentage() ? (
          <Statistics
            total={countTotalFeedback()}
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </ContainerFeedBack>
  );
}
