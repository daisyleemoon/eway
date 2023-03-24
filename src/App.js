import './App.css';
import Title from './components/Title/Title';
import DrawInformation from './components/DrawInformation/DrawInformation';
import DrawPrize from './components/DrawPrize/DrawPrize';
import Market from './components/Market/Market';
import Lighthouse from './components/Lighthouse/Lighthouse';

function App() {
  return (
    <div className="container">
      <Title />
      <DrawInformation />
      <DrawPrize />
      <Lighthouse />
      <Market />
    </div>
  );
}

export default App;
