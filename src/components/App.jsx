import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Wrapper, Title } from './FeedbackOptions/FeedbackOptions.styled';

export const App = () => {
  return (
    <Wrapper>
      <Title>Please leave feedback</Title>
      <FeedbackOptions />
    </Wrapper>
  );
};
