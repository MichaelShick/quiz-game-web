import './App.css';
import { SignIn } from './components/sign-in';
import { SignUp } from './components/sign-up';
function App() {
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<booloean>(false); 
   return (
    <div className="App">
      lets gooooo we have kahoot to do....
      <button onClick={setOpenSignUp(true)}> sign up </button>
      <button onClick={setOpenSignIn(true)}> sign in </button>

    {openSignIn && <SignIn/>}

     {openSignUp && <SignUp/>}
    </div>
  );
}

export default App;
