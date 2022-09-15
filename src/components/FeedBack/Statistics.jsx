import { StatisticsList, StatisticsListItem } from './FeedBack.module';
import PropTypes from 'prop-types';

export default function Statistics({
  total,
  good,
  neutral,
  bad,
  positivePercentage,
}) {
  return (
    <>
      <StatisticsList>
        <StatisticsListItem>Good: {good}</StatisticsListItem>
        <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
        <StatisticsListItem>Bad: {bad}</StatisticsListItem>
        <StatisticsListItem>Total: {total}</StatisticsListItem>
        <StatisticsListItem>
          Positive feedback: {positivePercentage}
        </StatisticsListItem>
      </StatisticsList>
    </>
  );
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
