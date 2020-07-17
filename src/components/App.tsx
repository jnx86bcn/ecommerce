import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { getProduts } from '../redux/actions';

import { DashboardProducts } from './products/DashboardProducts';
import { Product } from '../models';

export function App() {
  const App = styled.div`
    background: #e5fff3;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 33px;
  `;

  const dispatch = useDispatch();

  const products: Product[] = useSelector((state: any) => state.reducers.products);

  useEffect(() => {
    dispatch(getProduts());
  }, []);

  return <App>{products != undefined ? <DashboardProducts products={products} /> : null}</App>;
}
