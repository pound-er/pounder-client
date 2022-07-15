import React from 'react';
import styled from 'styled-components';
import itemImage from '../assets/ProductCardAssets/itemImage.png';
import sticker from '../assets/ProductCardAssets/sticker.png';
import customSticker from '../assets/ProductCardAssets/customSticker.png';
import { fontWeight, fontsize } from '../lib/theme';

const ProductCard = ({ itemName, price, rating, custom, schedule }) => {
  return (
    <ProductCardContainer>
      <ImageWrapper>
        <Image src={itemImage} />
        <Sticker src={sticker} />
        {custom ? (
          <>
            <CustomSticker src={customSticker} />
            <Schedule>{schedule}</Schedule>
          </>
        ) : null}
      </ImageWrapper>
      <ProductCardTitle>{itemName}</ProductCardTitle>
      <Price>{price}</Price>
    </ProductCardContainer>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  background-color: rgba(246, 246, 244, 1);
  border-radius: 4px;
  width: 288px;
  height: 370px;
`;

const Image = styled.img`
  margin-top: 12px;
  width: 288px;
  height: 276px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Sticker = styled.img`
  position: absolute;
  top: 20px;
  right: 25px;
`;

const CustomSticker = styled.img`
  position: absolute;
  top: 120px;
  right: 22px;
`;

const Schedule = styled.div`
  position: absolute;
  top: 60px;
  right: 45px;
  color: pink;
  font-size: 16px;
  font-family: 'Pretendard';
`;

const ProductCardTitle = styled.div`
  margin-top: 12px;
  font-size: 17px;
  font-weight : ${fontWeight[0]};
  margin-left: 28px;
`;

const Price = styled.div`
  color: rgba(0, 125, 254, 1);
  font-style: normal;
  font-weight: ${fontWeight[2]};
  font-size: ${fontsize[3]};
  margin-top: 8px;
  margin-left: 28px;
`;

const Rating = styled.div``;
