import { useState } from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
  const [selectedTopics, setselectedTopics] = useState("");
  console.log("selectedTopics", selectedTopics);
  console.log("setselectedTopics", setselectedTopics);
  function handelSelect(selectedButton) {
    // selectedButton => components, jsx, props, state;
    setselectedTopics((t) => {
      console.log("TTTT", t, setselectedTopics);
      return selectedButton;
    });
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        navButtons={
          <>
            <TabButton
              isSelected={selectedTopics == "components"}
              onClick={() => handelSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopics == "jsx"}
              onClick={() => handelSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopics == "props"}
              onClick={() => handelSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopics == "state"}
              onClick={() => handelSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
