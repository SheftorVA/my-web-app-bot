import { useEffect } from 'react';
import './App.css';
import useTelegram from './Hooks/useTelegram';

function App() {
  const { tg, onToggleButton, onClose } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className='App'>
      <button onClick={onToggleButton}>toggle</button>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
