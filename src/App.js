import './App.css';
import { Navbar } from './components/Navbar'
import {Banner} from './components/Banner'
import { AdPost } from './components/Adpost';
function App() {
  return (
    <>
    <Navbar />
    <AdPost />

    <Banner size={4} />
    </>
  );
}

export default App;
