import { BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'; //./Navbar/Navbar
// import navbar from './Navbar/Navbar';
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'

function App() {
   
  const dispatch = useDispatch()

   useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
   }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
