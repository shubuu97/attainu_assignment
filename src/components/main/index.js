import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { REFRESH_STORE } from "../../store/actionTypes";
import Items from "./items";

const Main = () => {
   const dispatch = useDispatch();
   const items = useSelector((state) => state.items, shallowEqual);

   //? Initialize all items to zero
   const handleRefreshClick = () => {
      dispatch({
         type: REFRESH_STORE,
      });
   };

   return (
      <main className="container">
         <div>
            <button
               disabled={(items || []).length === 0}
               className="btn btn-success m-2"
               onClick={handleRefreshClick}
            >
               <i className="fa fa-refresh"></i>
            </button>
            <button
               disabled={(items || []).length > 0}
               onClick={() => {
                  window.location.reload();
               }}
               className="btn btn-success m-2"
            >
               <i className="fa fa-recycle"></i>
            </button>
            <Items />
         </div>
      </main>
   );
};

export default Main;
