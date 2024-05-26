import React,{useReducer,useContext} from 'react'
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';

export const UserContext=React.createContext();

const initialCount=0;
const Reducer=(state,action)=>{
    switch(action)
    {
        case 'Increment': return state+1;
        case 'Decrement': return state-1;
        case 'Reset': return initialCount;

        default : return state
    }
}

function App() {
  const [count,dispatch]=useReducer(Reducer,initialCount)
  return (
    
    <div className="App">

    {/* <CounterOne/> */}
    {/* <CounterTwo/> */}
    {/* <CounterThree/> */}


    {/* <UserContext.Provider value={{countState: count,countDispatch: dispatch}}>
          count -{count}
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
    </UserContext.Provider> */}

    {/* <DataFetchingOne/> */}
    <DataFetchingTwo/>


    </div>
  );
}

export default App;
