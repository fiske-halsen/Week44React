import "./App.css";
import Counter from "./counter";
import Joke from "./joke";
import Members from "./ListDemo";

function App() {
  return (
    <div className="App">
      <Counter
        initCount={Number(localStorage.getItem("count"))}
        increments={5}
        decrements={5}
      />
      <Joke />
      <Members />
    </div>
  );
}

export default App;
