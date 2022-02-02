import "./App.sass";
import { Message } from "./components/Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello</h3>
        <Message text="My First React App" />
      </header>
    </div>
  );
}

export default App;
