export default function Section({ children, title, ...restProps }) {
  return (
    <section {...restProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
