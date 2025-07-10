import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Functional from './components/Functional';
import Classc from './components/Classc'
import Message from './components/Message'
import Counter from './components/Counter'
import Parent from './components/Parent'
import ConditionalCheck from './components/ConditionalCheck'
import NamesList from './components/NamesList'
// import Form from './components/Form'
import PropComponent from './components/PropComponent.jsx'
import List from './components/List.jsx'
import UseStateComponent from './components/UseStateComponent.jsx'


function App() {

  return (
    <div className="App">
      {/* <Greet />
      <Welcome/> */}
      {/* <Functional name="AK"/>
      <Functional name="Shiva"/>
      <Functional name="APPARAO"/> */}
      {/* <Classc/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Parent /> */}
      {/* <ConditionalCheck /> */}
      {/* <NamesList /> */}
      {/* <Form /> */}
      {/* <PropComponent name="Siva" age={27} skill='Ruby' isStudent={false}/> */}
      {/* <List /> */}
      <UseStateComponent />

    </div>
  );
}

export default App;
