import Sidebar from './components/Sidebar'
import Cards from './components/Cards'
import Graph from './components/Graph'
import { FaSistrix, FaAngleDown } from 'react-icons/fa'
import Product from './components/Products'
import './App.css';
import { FaCreativeCommonsNd, FaAngleLeft } from 'react-icons/fa'
import Overview from './components/Overview';
import { useState } from 'react'

function App() {

  const [button, setButton] = useState(false);
  const [cross, setCross] = useState(true);
  const [styleking, setstyle] = useState(null);
  function clickHandler() {
    // setButton(true);

    if (button) {
      setButton(false);
      setstyle('block');
    }
    else {
      setButton(true);
      setstyle('none');
    }
    // setCross(true);
  }
  function crossHandler() {
    setCross(true);
    setButton(false);
  }

  return (
    <div className="App bg-red-50 ">

      <div className='flex bg-red-50 '>
        <div className='fixed'>

          <div className='jugad'>
            <Sidebar />
          </div>
          <button className='click-btn' onClick={clickHandler}>
            <FaCreativeCommonsNd className='h-[25px] w-[25px] ml-[350px] bg-transparent' />
          </button>
          {
            button ? (<Sidebar />) : ((<FaCreativeCommonsNd className='hidden' />))
          }


        </div>
        <div className='mainCard ' style={{ display: `${styleking}` }}>


          <div className='mt-[57px] flex flex-col gap-8 ml-[250px]'>


            <Cards />

            <Graph />
            <Product />
          </div>
        </div>
      </div>
      <div>

      </div>

      {/* <Graph/> */}
      {/* <Overview /> */}








    </div>
  );
}

export default App;
