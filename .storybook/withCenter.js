import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const StoryCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const withCenter = story => (
  <Page>
    <StoryCenter>{story()}</StoryCenter>
  </Page>
);
