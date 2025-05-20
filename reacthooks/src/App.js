import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/useStateHook';
import UseEffectHook from './components/useEffectHook';
import UseRefHook from './components/useRefHook';
import UseMemohook from './components/useMemoHook';
import UseCallBackHook from './components/UseCallBackHook';
import UseContextHook from './components/UseContextHook';

function App() {
  return (
    <div className="App">
      <header>
        React Hooks
      </header>
      <div>
      {/* <UseStateHook></UseStateHook> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <UseRefHook></UseRefHook> */}
      {/* <UseMemohook></UseMemohook> */}
      {/* <UseCallBackHook></UseCallBackHook> */}
      <UseContextHook></UseContextHook>
      </div>
    </div>
  );
}

export default App;
