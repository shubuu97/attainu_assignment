import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Item from "./item";

/**
 * Renders items list
 */

const Items = () => {
   const items = useSelector((state) => state.items, shallowEqual);
   return (
      <div>
         {(items || []).map((item) => {
            return <Item key={item?.id} item={item} />;
         })}
      </div>
   );
};

export default Items;
