import "./App.css";
import Counter from "./components/Counter";
import RandomNumber from "./components/RandomNumber";

const App = () => {
  return (
    <main>
      <h1>Utility Dashboard</h1>

      <Counter />
      <RandomNumber />
    </main>
  );
};

export default App;