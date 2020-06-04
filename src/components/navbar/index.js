import React from "react";
import { useSelector, shallowEqual } from "react-redux";

const Navbar = () => {
   const items = useSelector((state) => state.items, shallowEqual);

   let calCartItems = () => {
      let count = 0;
      items.forEach((item) => {
         if (item?.value) {
            count += 1;
         }
      });
      return count;
   };

   return (
      <div>
         <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
               <i className="fa fa-shopping-cart fa-lg m-2" />
               <span className="badge badge-pill badge-info m-2" style={{ width: "50px" }}>
                  {calCartItems()}
               </span>
               Items
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
