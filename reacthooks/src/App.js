import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/useStateHook';
import UseEffectHook from './components/useEffectHook';
import UseRefHook from './components/useRefHook';
import UseMemohook from './components/useMemoHook';
import UseCallBackHook from './components/seCallBackHook';
import UseContextHook from './components/useContextHook';
import UseReducerHook from './components/useReducerHook';
import UseReducerHookSecond from './components/useReducerSecond';

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
      {/* <UseContextHook></UseContextHook> */}
      {/* <UseReducerHook></UseReducerHook> */}
      <UseReducerHookSecond></UseReducerHookSecond>
      </div>
    </div>
  );
}

export default App;
