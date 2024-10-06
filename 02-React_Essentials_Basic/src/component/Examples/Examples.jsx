import { useState } from "react";
import TabButton from "./TabButton/TabButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
  const [selectedTopics, setselectedTopics] = useState("");
  function handelSelect(selectedButton) {
    // selectedButton => components, jsx, props, state;
    setselectedTopics(selectedButton);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopics == "components"}
          onSelect={() => handelSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopics == "jsx"}
          onSelect={() => handelSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopics == "props"}
          onSelect={() => handelSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopics == "state"}
          onSelect={() => handelSelect("state")}
        >
          State
        </TabButton>
      </menu>
      <div id="tab-content">
        {!selectedTopics ? (
          <p>Please select a tab!!!</p>
        ) : (
          <>
            <h3>{EXAMPLES[selectedTopics]?.title}</h3>
            <p>{EXAMPLES[selectedTopics]?.description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopics]?.code}</code>
            </pre>
          </>
        )}
      </div>
    </section>
  );
}
