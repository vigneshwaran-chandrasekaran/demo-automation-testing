import { Main, GoldForm, MyForm } from "./components";

function App() {
  return (
    <div>
      <Main />
      <MyForm />
      <GoldForm prop1="prop1" prop2={3}>
        <p>testing</p>
      </GoldForm>
    </div>
  );
}

export default App;
