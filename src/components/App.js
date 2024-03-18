import { useState } from "react";
import Form from "./Form";
import Stats from "./Stats";
import Logo from "./logo";
import PackingList from "./PackingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Prolazimo kroz sve iteme pomocu filter, i ako item.id nije isti kao id koji smo stavili
  // onda taj item ulazi u array a ako je isti onda ispada iz array-a to jest bice obrisan
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearAll() {
    const confirmed = window.confirm("Do you want to delete all items?");
    if (confirmed) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} /> {/* Pravimo props za formu */}
      <PackingList
        itemsArr={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearAll}
      />
      <Stats itemObj={items} />
    </div>
  );
}
