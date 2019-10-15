import styled from 'styled-components';

export const ButtonLayout = styled.div`
  padding: 10px;
  border-radius: 5px;
  width: ${({ width = 150 }: { width?: number }) => `${width}px`};
  height: 20px;
  background-color: #d95327;
  color: white;
  text-align: center;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
