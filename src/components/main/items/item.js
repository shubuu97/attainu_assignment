import React from "react";
import { useDispatch } from "react-redux";
import {
   INCREMENT_ITEM_COUNT,
   DECREMENT_ITEM_COUNT,
   REMOVE_ITEM_COUNT,
} from "../../../store/actionTypes";

/**
 *
 * @prop {Object} item //item object with properties id and value
 */

const Item = ({ item }) => {
   const dispatch = useDispatch();

   const handleIncrementItem = () => {
      dispatch({
         type: INCREMENT_ITEM_COUNT,
         id: item.id,
      });
   };

   const handleDecrementItem = () => {
      dispatch({
         type: DECREMENT_ITEM_COUNT,
         id: item?.id,
      });
   };

   const handleRemoveItem = () => {
      dispatch({
         type: REMOVE_ITEM_COUNT,
         id: item?.id,
      });
   };

   return (
      <div>
         <div className="row">
            <div className="col-md-1">
               {/* add primary and warning classes conditionally */}
               <span
                  className={item?.value ? "badge m-2 badge-primary" : "badge m-2 badge-warning"}
                  style={{ fontSize: "24px" }}
               >
                  {item?.value ? item?.value : "Zero"}
               </span>
            </div>
            <div className="col-md-4">
               <button className="btn btn-secondary" onClick={handleIncrementItem}>
                  <i className="fa fa-plus-circle" />
               </button>
               <button
                  disabled={!item?.value}
                  className="btn btn-info m-2"
                  onClick={handleDecrementItem}
               >
                  <i className="fa fa-minus-circle" />
               </button>
               <button className="btn btn-danger" onClick={handleRemoveItem}>
                  <i className="fa fa-trash-o" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Item;
