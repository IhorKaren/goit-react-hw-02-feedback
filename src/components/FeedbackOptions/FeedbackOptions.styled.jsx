import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

  &:hover {
    background-color: #fff;
    color: ${({ color }) => color};
  }
`;

const FeedbackOptionsContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0
`;

const FeedbackOption = styled.li`
  list-style: none;
`;

export { Button, FeedbackOptionsContainer, FeedbackOption };
