import styled from 'styled-components';

export const GoogleAuthButtonLayout = styled.a`
  display: flex;
  height: 48px;
  width: 240px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #4285f4;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.21px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
    background-color: #4285f4;
  }
  &:active {
    background-color: #3367d6;
  }
`;

export const GoogleIconPlaceholder = styled.div`
  width: 18px;
  height: 18px;
  padding: 15px;
  border-radius: 1px;
  background-color: white;
`;

export const GoogleTextPlaceholder = styled.div`
  width: 100%;
  padding: 13px;
`;
