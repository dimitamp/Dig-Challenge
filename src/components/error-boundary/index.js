import React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';

const ErrorImage = styled.img.attrs( () => ({
  src: require('../../../assets/error.png'),
  alt: 'error image'
}))`
 max-width: 75vw;
 height: auto;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  render() {
   const {hasError} = this.state;
   const {children} = this.props;
    if (hasError) {
      return (
        <Flex 
          width={1} 
          height="100%" 
          justifyContent="center" 
          alignItems="center"
        >
          <ErrorImage />
        </Flex>
);
    }

    return children; 
  }
}


export default ErrorBoundary;
