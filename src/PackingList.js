import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  if (sortBy === "input") items.sort((a, b) => 0);
  if (sortBy === "description")
    items.sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    items.sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            a={item}
            onDeleteItems={onDeleteItems}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(a) => setSortBy(a.target.value)}>
          <option value="input"> Sort by input value</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
