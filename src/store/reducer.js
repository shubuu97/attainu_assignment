import initialState from "./initialState";
import {
   INCREMENT_ITEM_COUNT,
   DECREMENT_ITEM_COUNT,
   REMOVE_ITEM_COUNT,
   REFRESH_STORE,
} from "./actionTypes";

const reducer = (state = { ...initialState }, action) => {
   const { type, id } = action || {};
   switch (type) {
      case INCREMENT_ITEM_COUNT: {
         const { items } = state || {};
         let updatedItems = (items || []).map((item) => {
            if (item.id === id) {
               return {
                  ...item,
                  value: item?.value + 1,
               };
            }

            return {
               ...item,
            };
         });
         return { ...state, items: [...updatedItems] };
      }
      case DECREMENT_ITEM_COUNT: {
         const { items } = state || {};
         let updatedItems = (items || []).map((item) => {
            if (item.id === id) {
               return {
                  ...item,
                  value: item?.value - 1,
               };
            }

            return {
               ...item,
            };
         });
         return { ...state, items: [...updatedItems] };
      }
      case REMOVE_ITEM_COUNT: {
         const { items } = state || {};
         let updatedItems = (items || []).filter((item) => item?.id !== id);
         return { ...state, items: [...updatedItems] };
      }

      case REFRESH_STORE: {
         return {
            ...initialState,
         };
      }
      default:
         return { ...state };
   }
};

export default reducer;
