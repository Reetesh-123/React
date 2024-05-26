import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Functionclick from "./components/Functionclick";
import Classclick from "./components/Classclick";
import Eventbind from "./components/Eventbind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./Form";
import LifecycleA from "./components/LifecycleA";
import FragementDemo from "./components/FragementDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import { HoverCounter } from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counters from "./components/Counters";
import ComponentC from "./components/ComponentC";
import {UserProvider} from "./components/UserContext";
function App() {
  return (
    <>
      {/* <Greet name='component'/>
        <Welcome name='component'/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Functionclick/> */}
        {/* <Classclick/> */}
      {/* <Eventbind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <Inline/> */}
      {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
      {/* <Form/>  */}
      {/* <LifecycleA/> */}
      {/* <FragementDemo/> */}
      {/* <Table/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <PortalDemo/> */}

      {/* <ErrorBoundary>
        <Hero heroname='Batman'/>
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero heroname='SpiderMan'/>
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero heroname="Jocker"/>
        </ErrorBoundary> */}

      // hoc open with counter file too
      {/* <HoverCounter/>
        <ClickCounter/> */}

      {/* <User name={(isLoggedIn)=> isLoggedIn ?'Reetesh':'Guest'}/> */}

      <Counters
        render={(count, IncrementCount) => (
          <ClickCounterTwo count={count} IncrementCount={IncrementCount} />
        )}
      />

      <Counters
        render={(count, IncrementCount) => (
          <HoverCounterTwo count={count} IncrementCount={IncrementCount} />
        )}
      />
      {/* <UserProvider value='Reetesh'>
      <ComponentC/>

      </UserProvider> */}

    </>
  );
}

export default App;
