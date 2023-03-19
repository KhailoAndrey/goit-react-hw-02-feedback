import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  width: 300px;
  padding: 8px;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 18px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: ${p => p.theme.colors.white};
  font-size: 16px;
  font-weight: 700;
`;
