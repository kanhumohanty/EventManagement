
import Cards from './Cards'
//import list from '../../public/list.json'
import { useEffect, useState } from 'react'
import axios from 'axios'


function Findeve() {
const [event,setEvent]=useState([]);
useEffect(()=>{
  const getEvent=async()=>{
    try {
      const res=await axios.get("http://localhost:4001/event");
      console.log(res.data);
      setEvent(res.data);

    } catch (error) {
      
    console.log(error);
    }
  };
  getEvent();
},[]);

  return (
    <>
    <div>
      <div className='justify-center text center'>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs " />
      </div>
  <div>
{
  event.map((item)=>(
<Cards key={item.id} item={item}/>
  )
  )
}

  </div>
    </div>
    </>
  )
}

export default Findeve