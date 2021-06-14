const initialState=[]
const cartReducer=(state=initialState,action)=>{
   switch(action.Type){
       case 'cart/AddToCart':{
           return {...state,cart:[...state.cart,action.payload]}
       }
       default:{
           return state
       }
   }
}
export default cartReducer