import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeedbackButton = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  min-width: 90px;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 4px;
  cursor: pointer;

  transition: background 250ms linear;

  :not(:last-child) {
    margin-right: 12px;
  }

  &:hover,
  &:focus {
    background: #188ce8;
  }
`;
