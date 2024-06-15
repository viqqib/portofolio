import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className=" text-primary bg-bgcolor">
        <Header />
        <div className='bg-black h-screen'></div>
        <div className='bg-green-500 h-screen'></div>
    </div>
  );
}

export default App;
