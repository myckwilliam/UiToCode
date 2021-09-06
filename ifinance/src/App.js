import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Illustration from './Components/Illustration/Illustration';
import Info from './Components/Info/Info';
import DoubleSection from './Components/DoubleSection/DoubleSection';

import './App.css';



function App() {
  return (
    <Body>
      <div className="container app-header-container">
        <Header/>
      </div>
      <DoubleSection>
        <Info/>
        <Illustration/>
      </DoubleSection>

    </Body>
  );
}

export default App;
