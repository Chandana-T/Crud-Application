import logo from './logo.svg';
import './App.css';

// components
import NavBar from './Components/NavBar';
import CodeforInterview from './Components/CodeforInterview';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route path='/' element={ <CodeforInterview/>} />
       <Route path='/all' element={ <AllUsers/>} />
       <Route path='/add' element={ <AddUser/>} />
       <Route path='/edit/:id' element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
