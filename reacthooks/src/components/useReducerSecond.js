import { useReducer, useState } from "react";

const UseReducerHookSecond = () => {
  const initialState = [
    { id: Date.now(), name: "dipesh", email: "dipesh@gmail.com" },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function functioToPerform(state, action) {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "delete":
        return state.filter((contact) => contact.id !== action.payload.id);
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(functioToPerform, initialState);

  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name,
      email,
    };
    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact });
  };
  return (
    <div>
      <h2>UseReducerHook</h2>
      <hr></hr>
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <hr></hr>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div>
          <button>Add Context</button>
        </div>
      </form>
      <div>
        <ul>
         {state.map((contact) => {
           return (
             <li key = {contact.id}>
               <h2>{contact.name}</h2>
               <h2>{contact.email}</h2>
               <button
                onClick={() =>
                  dispatch({ type: "delete", payload:{id :  contact.id} })
                }
              >
                Delete
              </button>
             </li>
           )
         })}
          {/* {state.map((contact) => (
            <li key={contact.id}>
              <h2>{contact.name}</h2>
              <p>{contact.email}</p>
              <button
                onClick={() =>
                  dispatch({ type: "delete", payload: contact.id })
                }
              >
                Delete
              </button>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default UseReducerHookSecond;
