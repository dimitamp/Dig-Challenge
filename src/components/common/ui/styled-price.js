import styled from 'styled-components';
import {fontSize} from 'styled-system';
import {path} from 'ramda';

const StyledHeader = styled.div.attrs( (props) => ({fontSize: props.fontSize}))`
  width: 100%;
  text-align: center;
  overflow: hidden;
  color: ${path(['theme', 'colors', 'primary'])}
  text-overflow: ellipsis;
  margin: 0;
  font-weight: 600;
  ${fontSize};
`; 

StyledHeader.defaultProps = {fontSize: [4, 6]};

export default StyledHeader; 
