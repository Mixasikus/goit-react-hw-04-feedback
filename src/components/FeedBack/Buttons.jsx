import { Button, ButtonContainer } from './FeedBack.module';

export default function Buttons({ onClickGood, onClickNeutral, onClickBad }) {
  return (
    <ButtonContainer>
      <Button type="button" onClick={onClickGood}>
        Good
      </Button>
      <Button type="button" onClick={onClickNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onClickBad}>
        Bad
      </Button>
    </ButtonContainer>
  );
}
