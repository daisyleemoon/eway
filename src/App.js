import './App.scss';
import { useRef } from 'react';
import Title from './components/Title/Title';
import DrawInfoForm from './components/DrawInfoForm/DrawInfoForm';
import DrawPrize from './components/DrawPrize/DrawPrize';
import Market from './components/Market/Market';
import Lighthouse from './components/Lighthouse/Lighthouse';

function App() {
  const scrollTargetFormRef = useRef(null);

  const scrollToForm = () => {
    scrollTargetFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <Title scrollToForm={scrollToForm} />
      <DrawInfoForm scrollTargetFormRef={scrollTargetFormRef} />
      <DrawPrize />
      <Lighthouse />
      <Market />
    </div>
  );
}

export default App;
