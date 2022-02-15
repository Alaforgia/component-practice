import logo from "./logo.svg";
import "./App.css";
import "./Styles/styles.css";
import Header from "./components/Header";
import Todoinputs from "./components/Todoinputs";
import Tasklist from "./components/Tasklist";
function App() {
  return (
    <div className="App">
      <Header title="Task List" />
      <Todoinputs />
      <Tasklist />
    </div>
  );
}

export default App;
