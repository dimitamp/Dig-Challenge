import styled from 'styled-components';
import {layout} from 'styled-system';

const Thumbnail = styled.img.attrs( (props) => ({
  width: props.width,
  height: props.height
}))`
 ${layout};
`;

Thumbnail.defaultProps = {
  width: [250, 300],
  height: [250, 300]
};

export default Thumbnail;
