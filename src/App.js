import './App.css';
import Title from './components/Title/Title';
import DrawInformation from './components/DrawInformation/DrawInformation';
import DrawPrize from './components/DrawPrize/DrawPrize';
import Market from './components/Market/Market';
import LightHouse from './components/LightHouse/LightHouse';

function App() {
  return (
    <div className="container">
      <Title />
      <DrawInformation />
      <DrawPrize />
      <LightHouse />
      <Market />
    </div>
  );
}

export default App;
