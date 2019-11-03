import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {space, layout} from 'styled-system';
import {withRouter} from 'react-router-dom';
import {path} from 'ramda';
import {
StyledCard, StyledTitle, Thumbnail, StyledPrice
} from '../common/ui';

const PreviewCard = styled(StyledCard).attrs(() => ({
  p: [3],
  width: [350, 400],
  height: [350, 400],
  }))`
  ${space};
  ${layout};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 10;
`;

const Component = ({history, product: {title, images, price,  id}, product}) => (
  <PreviewCard onClick={() => history.push({pathname: `/products/${id}`, state: {product}})}>
    <Thumbnail src={path(['0', 'thumb'], images)} />
    <StyledTitle>{title}</StyledTitle>
    <StyledPrice>
      {`${price}$`}
    </StyledPrice>
  </PreviewCard>
);


Component.propTypes = {
 history: PropTypes.objectOf(PropTypes.any).isRequired,
 product: PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    thumb: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired
  })).isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
 }).isRequired
};

export default withRouter(Component);
