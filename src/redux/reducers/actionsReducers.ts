import { Product } from '../../models/Product';

export enum ActionTypes {
  SET_LOADING = 'SET_LOADING',
  GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
  ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST',
  ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR'
}

export type Action =
  | { type: ActionTypes.SET_LOADING; Payload: boolean }
  | { type: ActionTypes.ADD_PRODUCT_REQUEST; Payload: string }
  | { type: ActionTypes.ADD_PRODUCT_SUCCESS; Payload: string }
  | { type: ActionTypes.ADD_PRODUCT_ERROR; Payload: string }
  | { type: ActionTypes.GET_PRODUCTS_REQUEST }
  | { type: ActionTypes.GET_PRODUCTS_SUCCESS; Payload: Product[] }
  | { type: ActionTypes.GET_PRODUCTS_ERROR; Payload: string };

export function reducers(state = {}, action: any) {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state
      };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    case ActionTypes.GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case ActionTypes.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        product: action.payload
      };
    case ActionTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        success: action.payload
      };
    case ActionTypes.ADD_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {};
  }
}
