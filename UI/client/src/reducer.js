export const initialState = {
  basket: [],
  user: null,
  extras: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      let st=[...state.basket]
      let indx=st.findIndex((b) => b.id == action.item.id)
      console.log(indx)
      if (indx>=0) {
       action.item.count+=st[indx].count
       st[indx]=action.item
      return {
        ...state,
        basket: [...st],
      }; 
      } else {
        return {
          ...state,
          basket: [...state.basket, action.item],
        }; 
      }
    case "REMOVE_FROM_CART":
      console.log(action)
      const index = state.basket.findIndex((b) => b.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id:${action.id} as it is not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "SET_EXTRAS":
      return {
        ...state,
        extras: action.extras,
      };
    default:
      return state;
  }
};
export default reducer;
