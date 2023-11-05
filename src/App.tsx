import { Main, GoldForm, MyForm, TestForm, Registration } from "./components";

function App() {
  return (
    <div>
      <Main />
      <Registration />
      <TestForm />
      <MyForm />
      <GoldForm prop1="prop1" prop2={3}>
        <p>testing</p>
      </GoldForm>
    </div>
  );
}

export default App;
