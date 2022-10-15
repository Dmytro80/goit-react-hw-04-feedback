import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;

  align-items: center;
  flex-direction: column;
`;

export const StatisticsItem = styled.li`
  font-size: 22px;
  font-weight: 500;
  color: #757575;

  :not(:last-child) {
    margin-bottom: 6px;
  }
`;
