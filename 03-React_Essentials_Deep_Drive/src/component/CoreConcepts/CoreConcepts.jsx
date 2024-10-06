import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section";
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
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((ele) => (
          <CoreConcept key={ele.title} {...ele} />
        ))}
      </ul>
    </Section>
  );
}
