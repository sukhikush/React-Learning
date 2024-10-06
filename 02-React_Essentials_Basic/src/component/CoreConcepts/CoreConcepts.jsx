import { CORE_CONCEPTS } from "../../data";

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((ele) => (
          <CoreConcept key={ele.title} {...ele} />
        ))}
      </ul>
    </section>
  );
}
