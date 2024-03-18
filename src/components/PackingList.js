import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  itemsArr,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  sortBy === "input" && (sortedItems = itemsArr);

  sortBy === "description" &&
    (sortedItems = itemsArr
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)));

  sortBy === "packed" &&
    (sortedItems = itemsArr
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed)));

  sortBy === "quantity" &&
    (sortedItems = itemsArr.slice().sort((a, b) => a.quantity - b.quantity));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      {itemsArr.length ? (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
            <option value="quantity">Sort by quantity</option>
          </select>

          <button onClick={onClearItems}>Clear All</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
