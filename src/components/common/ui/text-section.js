
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledDescription from './styled-description';
import StyledTitle from './styled-title';

const SectionHeader = styled(StyledTitle)`
 text-align: left;
 line-height: 2;
 border-bottom: 1px solid #e0e0e0;
 `;

const TextSection = ({text, header}) => (
  <React.Fragment>
    {header && (
    <SectionHeader
      fontSize={[3, 5]} 
    >
      {header}

    </SectionHeader>
    )}
    <StyledDescription>{text}</StyledDescription>
  </React.Fragment>
);


TextSection.propTypes = {
 text: PropTypes.string.isRequired,
 header: PropTypes.string
};

TextSection.defaultProps = {header: ''}
;

export default TextSection;
