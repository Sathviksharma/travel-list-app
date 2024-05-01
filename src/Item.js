export default function Item({ a, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={a.packed}
        onChange={() => {
          onToggleItem(a.id);
        }}
      ></input>
      <span style={a.packed ? { textDecoration: "line-through" } : {}}>
        {a.quantity}
        {a.description}
      </span>
      <button onClick={() => onDeleteItems(a.id)}>❌</button>
    </li>
  );
}
