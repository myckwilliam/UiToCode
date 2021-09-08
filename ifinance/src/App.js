import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Illustration from './Components/Illustration/Illustration';
import Info from './Components/Info/Info';
import './App.css';



function App() {
  return (
    <Body className="app-body">
      <Header className="app-header"/>   
      <Info className="app-info"/>
      <Illustration className="app-illustration"/>
    </Body>
  );
}

export default App;
