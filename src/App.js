import Counter from "./Components/Counter";
import DecreaseCounter from "./Components/DecreaseCounter";
import IncreaseByTwoCounter from "./Components/IncreaseByTwoCounter";
import IncreaseCounter from "./Components/IncreaseCounter";


function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
