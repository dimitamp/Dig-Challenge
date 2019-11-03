import styled from 'styled-components';
import {fontSize} from 'styled-system';

const StyledHeader = styled.div.attrs( (props) => ({fontSize: props.fontSize}))`
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin: 10 0;
  font-weight: ${props => props.fontWeight};
  ${fontSize};
`; 

StyledHeader.defaultProps = {fontSize: [2, 3, 4], fontWeight: 400};

export default StyledHeader; 
