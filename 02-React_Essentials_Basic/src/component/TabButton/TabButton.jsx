export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : "inactive"} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
