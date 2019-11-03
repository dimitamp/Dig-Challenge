import styled from 'styled-components';
import {Text} from '@blueprintjs/core';
import {path} from 'ramda';

const StyledText = styled(Text)`
  font-size: ${path(['theme', 'fontSizes', 2])};
`;

export default StyledText;
