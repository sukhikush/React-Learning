import Header from "./component/Header/Header";
import CoreConcepts from "./component/CoreConcepts/CoreConcepts";
import Examples from "./component/Examples/Examples";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
