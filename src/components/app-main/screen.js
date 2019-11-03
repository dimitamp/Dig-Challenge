import React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';
import AppHeader from '../app-header';
// import propTypes from 'prop-types';

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;


export const Component = ({children}) => (
  <MainContainer>
    <AppHeader />
    <Flex width={1} height="100%" flexDirection="column">
      {children}
    </Flex>
  </MainContainer>

);

Component.propTypes = {};
Component.defaultProps = {};

export default Component;
