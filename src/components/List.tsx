import { useEffect, useState } from "react";

interface ListProps {
  getItems: () => string[];
}

function List({ getItems }: ListProps) {
  const [myItems, setMyItems] = useState<string[]>([]);

  useEffect(() => {
    console.log("Buscando itens");

    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      {myItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default List;
