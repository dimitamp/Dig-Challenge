import styled from 'styled-components';
import {fontSize} from 'styled-system';

const StyledDescription = styled.div.attrs( (props) => ({fontSize: props.fontSize}))`
  width: 100%;
  text-align: center;
  opacity: 0.8;
  margin: 30 0;
  ${fontSize};
`; 

StyledDescription.defaultProps = {fontSize: [3 , 5]};

export default StyledDescription; 
