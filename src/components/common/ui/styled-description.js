import styled from 'styled-components';
import {fontSize} from 'styled-system';

const StyledDescription = styled.div.attrs( (props) => ({fontSize: props.fontSize}))`
  width: 100%;
  text-align: left;
  opacity: 0.8;
  margin-bottom: 30;
  ${fontSize};
`; 

StyledDescription.defaultProps = {fontSize: [2, 3]};

export default StyledDescription; 
