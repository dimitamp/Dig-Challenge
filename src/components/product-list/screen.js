import React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';
import {StyledContainer} from '../common/ui';
import ProductPreview from '../product-preview';
import {Fetcher} from '../common/hoc';
import {getProducts} from '../../api/products';

const PreviewsSection = styled(Flex).attrs(() => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: 1,
  justifyContent: 'center'
}))``;

export const Component = () => (
  <Fetcher action={getProducts} spinnerClass="verticalCenter"> 
    {(products) => (
      <StyledContainer
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
      >
        <PreviewsSection>
          {products
                .map(product => (
                  <ProductPreview
                    key={product.id}
                    product={product}
                  />
              ))}
        </PreviewsSection>
      </StyledContainer>
          )}
  </Fetcher>
  );


export default Component;
