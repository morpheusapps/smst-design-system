import styled from 'styled-components';
import { DynamicSizeProps } from '../../types';

export const ButtonLayout = styled.div<DynamicSizeProps>`
  padding: 10px;
  border-radius: 5px;
  width: ${({ width = 150 }: { width?: number }) => `${width}px`};
  height: ${({ height = 20 }: { height?: number }) => `${height}px`};
  background-color: #40b4e5;
  color: white;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #70d5ff;
  }
`;
