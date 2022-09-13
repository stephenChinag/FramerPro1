import Bio from './component/Bio';
import './App.css';
import NavBar from './component/NavBar';
import { Fragment } from 'react';
import Gallery from './component/Gallery';



const App =  ()=> {


  return (
    <Fragment>
    <NavBar/>
    <div className="container">

    <Bio/>
    <Gallery/>
    </div>
    
    </Fragment>
  );
}

export default App;
