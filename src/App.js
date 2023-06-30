import { Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './Weather';
import Error from './Error';
import { NavigateStateProvider } from './contexts/navigateState.context';
import Weather1 from './Weather1';

function App() {
  return (
    <NavigateStateProvider>
      <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='/search' element={<Weather1 />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </NavigateStateProvider>
  );
}

export default App;
