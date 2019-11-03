import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Flex} from 'rebass';
import {path} from 'ramda';
import {
space, layout, fontSize
} from 'styled-system';
import {
StyledTitle, StyledPrice, StyledDescription, Thumbnail
} from '../common/ui';

const ProductContainer = styled(Flex).attrs(() => ({
  width: 1,
  height: '100%',
  flexWrap: 'wrap'
}))``;

const ProductSection = styled(Flex).attrs(() => ({
  width: [1, 1 / 2],
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  p: [2, 4]
}))`
  ${layout}
  ${space};
`;

const OriginalImage = styled.img`
 width: 100%;
 height: auto;
 object-fit: contain;
`;

const OriginalImageContainer = styled(Flex).attrs(() => ({
  width: 1,
  height: '70%',
  justifyContent: 'center'
}))`
  max-height: 600;
`;

const ThumbnailsContainer = styled(Flex).attrs(() => ({
  width: 1,
  justifyContent: 'space-evenly',
  height: '30%',
  flexWrap: 'wrap'
}))`
  margin-top: 50;
`;


const ButtonsContainer = styled(Flex).attrs(() => ({width: 0.9, justifyContent: 'space-evenly'}))`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50;
  paddin
  g: ${path(['theme', 'space', 2])};
`;

const StyledButton = styled.button.attrs(() => ({
 fontSize: [3, 5],
  px: [3, 4],
  py: [2],
}))`
  ${fontSize};
  ${space};
 background-color: ${path(['theme', 'colors', 'primary'])};
 color: #ffffff;
 border: none;
 border-radius: 3px;
 cursor: pointer;
 &:hover{
  background-color: ${path(['theme', 'colors', 'secondary'])};
 }
`;

const Component = ({history}) => {
  const product = path(['location', 'state', 'product'], history);
  const {title, description, price, images, specification} = product;
  const  [showingIndex, setShowingIndex] = useState(0);
  return (
    <ProductContainer>
      <ProductSection>
        <OriginalImageContainer>
          <OriginalImage alt="original image" src={path([showingIndex, 'original'], images)} />
        </OriginalImageContainer>
        <ThumbnailsContainer>
          {images.map( (image, index) => (
            <Thumbnail 
              style={{borderBottom: '1px solid #e0e0e0', cursor: 'pointer', margin: '10 20'}}
              src={image.thumb} 
              width={[60, 100]} 
              height={[60, 100]} 
              onClick={() => setShowingIndex(index)}
            />
          )
          )}
        </ThumbnailsContainer>
      </ProductSection>
      <ProductSection>
        <StyledTitle
          fontWeight={600}
          fontSize={[4, 6]}
        >
          {title}
        </StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledDescription>{specification}</StyledDescription>
        <StyledPrice>{`${price}$`}</StyledPrice>
        <ButtonsContainer>
          <StyledButton>
          Buy it now
          </StyledButton>
          <StyledButton>
          Add to cart
          </StyledButton>

        </ButtonsContainer>
      </ProductSection>
    </ProductContainer>
  );
};

export default Component;

Component.propTypes = {history: PropTypes.objectOf(PropTypes.any).isRequired};
