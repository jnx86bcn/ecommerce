import { Product } from '../../models/Product';
import { ActionTypes } from '../reducers/actionsReducers';

import { getProducts_test } from '../../services/productService';

const action_setLoading = (loading: boolean) => ({
  type: ActionTypes.SET_LOADING,
  payload: loading
});

const action_getProductsRequest = () => ({
  type: ActionTypes.GET_PRODUCTS_REQUEST
});

const action_getProductsSuccess = (products: Product[]) => ({
  type: ActionTypes.GET_PRODUCTS_SUCCESS,
  payload: products
});

const action_getProductsError = (error: string) => ({
  type: ActionTypes.GET_PRODUCTS_ERROR,
  payload: error
});

const action_setProductRequest = (product: string) => ({
  type: ActionTypes.ADD_PRODUCT_REQUEST,
  payload: product
});

const action_setProductSuccess = (success: string) => ({
  type: ActionTypes.ADD_PRODUCT_SUCCESS,
  payload: success
});

const action_setProductError = (error: string) => ({
  type: ActionTypes.ADD_PRODUCT_ERROR,
  payload: error
});

export function getProduts() {
  return async (dispatch: any) => {
    try {
      dispatch(action_getProductsRequest());
      dispatch(action_setLoading(true));
      const products = await getProducts_test();
      dispatch(action_getProductsSuccess(products));
      dispatch(action_setLoading(false));
    } catch (error) {
      dispatch(action_getProductsError(error));
      dispatch(action_setLoading(false));
    }
  };
}
