import './App.css';
import { Navbar } from './components/Navbar'
import {Banner} from './components/Banner'
function App() {
  return (
    <>
    <Navbar />
    <Banner size={2} />
    </>
  );
}

export default App;
