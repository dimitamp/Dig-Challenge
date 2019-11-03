import styled from 'styled-components';
import {layout} from 'styled-system';
import {path} from 'ramda';

const Thumbnail = styled.img.attrs( (props) => ({
  width: props.width,
  height: props.height
}))`
 border-bottom: ${props => props.active ? '1px solid' : 'none'}
 border-color: ${path(['theme', 'colors', 'primary'])}
 ${layout};
`;

Thumbnail.defaultProps = {
  width: [250, 300],
  height: [250, 300],
  active: false
};

export default Thumbnail;
