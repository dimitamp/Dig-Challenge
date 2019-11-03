import {Card, Elevation} from '@blueprintjs/core';
import styled from 'styled-components';

const StyledCard = styled(Card).attrs((props) => ({elevation: props.elevation, interactive: props.interactive}))``;

StyledCard.defaultProps = {
 elevation: Elevation.THREE,
 interactive: true
};

export default StyledCard;
