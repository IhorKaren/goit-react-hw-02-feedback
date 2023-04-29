import styled from 'styled-components';

const StaticticContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0;
`;

const StatItem = styled.li`
  display: flex;
  
  padding: 10px;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  color: #fff;
  list-style: none;
`;

const StatValue = styled.p`
  margin: 0;
`;

export { StaticticContainer, StatItem, StatValue };
