import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Components/AddTask';
import EditTask from './Components/EditTask';


function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTask />} />
          <Route path='/edittask/:id' element={<EditTask /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
