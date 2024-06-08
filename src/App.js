import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="ReactApp" menu1="Home" menu2="About"  />

      <div className="container my-5">
        <TextForm />
      </div>
    </>    
  );
}

export default App;
