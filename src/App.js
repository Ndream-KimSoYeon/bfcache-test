import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Second from './Second';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
          </Route>
          <Route path="/second" element={<Second />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
