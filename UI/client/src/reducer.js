let persistedState = JSON.parse(localStorage.getItem("store"));
export const initialState = persistedState
  ? persistedState
  : {
      basket: [],
      user: null,
      extras: [],
      cartSidebar: false,
      wishlist: [],
    };
console.log(initialState);

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "ADD_TO_BASKET": {
      let st = [...state.basket];
      let indx = st.findIndex((b) => b.id == action.item.id);
      console.log(indx);
      if (indx >= 0) {
        action.item.count += st[indx].count;
        st[indx] = action.item;
        return {
          ...state,
          basket: [...st],
          cartSidebar: true,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, action.item],
          cartSidebar: true,
        };
      }
    }
    case "ADD_TO_WISHLIST": {
      let st = state.wishlist ? [...state.wishlist] : [];
      let indx = st.findIndex((b) => b.id == action.item.id);
      console.log(indx);
      if (indx >= 0) {
        st[indx] = action.item;
        return {
          ...state,
          wishlist: [...st],
        };
      } else {
        return {
          ...state,
          wishlist: state.wishlist
            ? [...state.wishlist, action.item]
            : [action.item],
        };
      }
    }
    case "USER_VERIFIED": {
      return {
        ...state,
        user: {
          ...state.user,
          verified: true,
        },
      };
    }
    case "REMOVE_FROM_CART": {
      console.log(action);
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
    }
    case "REMOVE_FROM_WISHLIST": {
      console.log(action);
      const index = state.wishlist.findIndex((b) => b.id === action.id);
      let newWishlist = [...state.wishlist];
      if (index >= 0) {
        newWishlist.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id:${action.id} as it is not in basket!`
        );
      }
      return {
        ...state,
        wishlist: newWishlist,
      };
    }
    case "EDIT_CART_COUNT": {
      console.log(action);
      const countIndex = state.basket.findIndex((b) => b.id === action.item.id);
      let newBasket = [...state.basket];
      newBasket[countIndex].count = action.item.count;
      return {
        ...state,
        basket: newBasket,
      };
    }
    case "SET_USER": {
      return {
        ...state,
        user: action.user,
      };
    }
    case "EMPTY_BASKET": {
      return {
        ...state,
        basket: [],
      };
    }
    case "SET_EXTRAS": {
      return {
        ...state,
        extras: action.extras,
      };
    }
    case "CART_SIDEBAR_TOGGLE": {
      return {
        ...state,
        cartSidebar: !state.cartSidebar,
      };
    }
    case "USER_LOGIN": {
      return {
        ...state,
        user: action.user,
      };
    }
    case "USER_LOGOUT": {
      return { ...state, user: null };
    }
    default:
      return state;
  }
};
export default reducer;
