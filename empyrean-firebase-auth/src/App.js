import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import AuthDetails from './components/auth/AuthDetails.jsx';

function App() {
  return (
    <div className="App">
    <SignIn/>
    <SignUp/>
    <AuthDetails/>
    </div>
  );
}

export default App;
