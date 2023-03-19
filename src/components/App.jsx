import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Wrapper, Title } from './FeedbackOptions/FeedbackOptions.styled';
import { Statistics } from './Statistics/Statistics';
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

export const App = () => {
  return (
    <Wrapper>
      <Title>Please leave feedback</Title>
      <FeedbackOptions />
      <Statistics />
    </Wrapper>
  );
};
