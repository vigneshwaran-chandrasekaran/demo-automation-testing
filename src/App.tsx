import { Main, GoldForm } from "./components";

function App() {
  return (
    <div>
      <Main />
      <GoldForm prop1="prop1" prop2={3}>
        <p>testing</p>
      </GoldForm>
    </div>
  );
}

export default App;
