import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/useStateHook';
import UseEffectHook from './components/useEffectHook';

function App() {
  return (
    <div className="App">
      <header>
        React Hooks
      </header>
      <div>
      {/* <UseStateHook></UseStateHook> */}
      <UseEffectHook></UseEffectHook>
      </div>
    </div>
  );
}

export default App;
