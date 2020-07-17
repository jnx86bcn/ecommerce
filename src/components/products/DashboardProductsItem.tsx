import React from 'react';
import { Product } from '../../models';

import { Favorite } from '../common/Favorite';

import styled from '@emotion/styled';
import css from '@emotion/core';

//Card//
const Card = styled.div`
  background-color: #ffcdc5;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 610px;
  margin: 30px 0px;
  padding: 30px;
  transition: 0.3s;
  width: 290px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

//BodyCard//
const BodyCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 217px;
  margin-top: 30px;
  width: 290px;
`;
const Title = styled.div`
  border-bottom: 2px solid black;
  font-size: 1.3em;
  font-weight: bold;
  margin: 20px 12px 12px 20px;
  padding-bottom: 15px;
`;
const Description = styled.div`
  font-size: 1em;
  font-weight: normal;
  height: 45px;
  margin: 0px 20px;
`;
const Price = styled.div`
  font-size: 1.4em;
  font-weight: bold;
  margin: 5px 20px;
`;
//BodyCard//

//FooterCard//
const FooterCard = styled.div`
  display: flex;
  height: 52px;
  justify-content: space-between;
  margin: 0px 15px;
  width: 90%;
`;
const FooterCardCircle = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  height: 95%;
  width: 20%;
`;

const IconSex = styled.img`
  margin: 10px;
  height: 30px;
  width: 30px;
`;
//FooterCard//
//Card//

export function DashboardProductsItem({ product = new Product() }) {
  console.log(product);

  const ImageCard = styled.div`
    background-image: url(${product.Product_imageURL});
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    height: 363px;
    width: 290px;
  `;

  return (
    <Card>
      <ImageCard />
      <BodyCard>
        <Title>{product.Product_name}</Title>
        <Description>{product.Product_description}</Description>
        <Price>{product.Product_price} €</Price>
        <FooterCard>
          <FooterCardCircle>
            <IconSex src={product.Product_sex}></IconSex>
          </FooterCardCircle>
          <FooterCardCircle>
            <Favorite />
          </FooterCardCircle>
        </FooterCard>
      </BodyCard>
    </Card>
  );
}
