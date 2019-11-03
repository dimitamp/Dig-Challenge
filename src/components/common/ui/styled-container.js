import {Box} from 'rebass';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {space} from 'styled-system';

const StyledContainer = styled(Box).attrs( () => ({padding: [2, 3, 4]}))`
  display: flex;
  flex: 1;
  min-height: 100%;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  ${space}
`;

StyledContainer.propTypes = {
  justifyContent: propTypes.string,
  alignItems: propTypes.string,
  flexDirection: propTypes.string
};

StyledContainer.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
};

export default StyledContainer;
