import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Data from './components/Data';



function App() {
  return (
    <div>
     <Header />

     <Data />
      {/* adding footer component */}
      <GallaryFooter /> 
    </div>
  )
}

export default App;
