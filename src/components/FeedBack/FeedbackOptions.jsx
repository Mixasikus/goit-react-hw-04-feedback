import { Button, ButtonList, ButtonListItem } from './FeedBack.module';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonListItem key={option}>
          <Button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            name={option}
          >
            {option}
          </Button>
        </ButtonListItem>
      ))}
    </ButtonList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
