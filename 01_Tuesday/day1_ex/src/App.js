import logo from "./logo.svg";
import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import person from "./file2";
import { males, females } from "./file2";
import MultiWelcome from "./file3";

let { firstName, email } = { ...person };

const array1 = [...males, ...females];

const array2 = [...males, "Kurt", "Helle", ...females, "Tina"];

console.log(array1);
console.log(array2);

function App() {
  return (
    <div className="App">
      <h2>Ex 2</h2>
      <MultiWelcome />
    </div>
  );
}

export default App;
