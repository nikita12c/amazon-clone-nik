export const initialState = {
  basket: [],
  user:null,
}
//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index=state.basket.findIndex(
        (basketItem)=>basketItem.id===action.id
      )
      let newBakset=[...state.basket];
      if(index >= 0){
        newBakset.splice(index,1);
      }
      else{
        console.warn(`Can't remove the product  (id:${action.id}) as its not in the basket`)
      }
      return{
        ...state,
        basket:newBakset
      }
    case "SET_USER":
      return{
        ...state,
        user:action.user
      }
    default:
      return state;
  }
}

export default reducer;