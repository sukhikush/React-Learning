export default function TabButton({ children, isSelected, ...restProps }) {
  return (
    <li>
      <button className={isSelected ? "active" : "inactive"} {...restProps}>
        {children}
      </button>
    </li>
  );
}
