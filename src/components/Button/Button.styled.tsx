import styled from 'styled-components';
import { DynamicSizeProps } from '../../types';

export const ButtonLayout = styled.div<DynamicSizeProps>`
  padding: 10px;
  border-radius: 5px;
  width: ${({ width = 150 }: { width?: number }) => `${width}px`};
  height: ${({ height = 20 }: { height?: number }) => `${height}px`};
  background-color: #d95327;
  color: white;
  text-align: center;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
