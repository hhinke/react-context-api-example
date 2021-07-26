import { createContext, useContext } from 'react';

var MyContext = createContext();

function Login() {
  return (
    <MyButton />
  )
}

function MyButton() {
  var ctx = useContext(MyContext);
  return (
    <button> {ctx.btnText} </button>
  )
}

function App() {
  return (
    <MyContext.Provider value={ { btnText: "Olá Mundo" } }>
      <Login/>
    </MyContext.Provider>
  );
}

export default App;
