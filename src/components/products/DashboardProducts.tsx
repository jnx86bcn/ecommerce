import React from 'react';
import { Product } from '../../models';

import { DashboardProductsItem } from './DashboardProductsItem';

export function DashboardProducts({ products = new Array<Product>() }) {
  const productsRendered = products.map((product: Product, index: number) => {
    return <DashboardProductsItem key={index} product={product} />;
  });

  return <>{productsRendered}</>;
}
