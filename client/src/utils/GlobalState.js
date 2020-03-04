import React, { createContext, useReducer, useContext } from 'react';
import { ADD_CART, UPDATE_CART, REMOVE_CART, LOADING } from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        carts: [action.post, ...state.carts],
        loading: false
      };

    case UPDATE_CART:
      return {
        ...state,
        carts: [...state.carts],
        loading: false
      };

    case REMOVE_CART:
      return {
        ...state,
        carts: state.carts.filter(post => {
          return post._id !== action._id;
        })
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    carts: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
