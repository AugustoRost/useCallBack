import { useCallback, useState } from "react";
import List from "./List";

function Count() {
  const [count, setCount] = useState<number>(0);
  const getItemsFromDataBase = () => {
    return ["a", "b", "c", "d", "e", "f"];
  };
  // const getItemsFromDataBase = useCallback(() => {
  //   return ["a", "b", "c", "d", "e", "f"];
  // }, []);
  return (
    <>
      <div>
        <List getItems={getItemsFromDataBase} />
        <button onClick={() => setCount((count) => count + 1)}>
          contador em {count}
        </button>
      </div>
    </>
  );
}
export default Count;
