export default function Item({ itemObj, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemObj.packed} // Da odma bude cekirano ako je true
        onChange={() => onToggleItem(itemObj.id)}
      ></input>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}
