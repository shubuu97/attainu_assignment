export const uniqueIdGenerator = () => {
   return "_" + Math.random().toString(36).substr(2, 9);
};

const createItems = () => {
   const items = [];
   for (let i = 0; i < 4; i++) {
      items.push({
         id: uniqueIdGenerator(),
         value: 0,
      });
   }
   return items;
};

const initialState = {
   items: createItems(),
};

export default initialState;
