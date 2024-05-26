import React from 'react'
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';

export const Usercontext=React.createContext()
export const Channelcontext=React.createContext()

function App() {
  return (
    <div className="App">
     {/* <ClassCounter/> */}
     {/* <HookCounter/> */}
     {/* <HookCounterTwo/> */}
     {/* <HookCounterThree/> */}
    {/* <HookCounterFour/> */}

    {/* <ClassCounterOne/> */}
    {/* <HookCounterOne/> */}

    {/* <ClassMouse/> */}
    {/* <HookMouse/> */}

    {/* <MouseContainer/> */}

    {/* <IntervalClassCounter/> */}
    {/* <IntervalHookCounter/> */}

    {/* <DataFetching/> */}

    <Usercontext.Provider value={'Reetesh'}> 
        <Channelcontext.Provider value={'TechRoms'}>
            <ComponentC/>
        </Channelcontext.Provider>
    </Usercontext.Provider>

    </div>
  );
}

export default App;
