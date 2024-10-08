import React from 'react';
import Cards from './Cards';
//import list from '../../public/list.json';
import { useEffect, useState } from 'react'
import axios from 'axios';

function Findevents() {

  const [event,setEvent]=useState([]);
useEffect(()=>{
  const getEvent=async()=>{
    try {
      const res=await axios.get("http://localhost:4001/event");
      console.log(res.data);
      setEvent(res.data.filter((data)=>data.price>0));

    } catch (error) {
      
    console.log(error);
    }
  };
  getEvent();
},[]);


  return (
   <>
   <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 gap-4">
   {event.map((item) =>
  item && item.img ? ( // Check if item and item.img exist
    <Cards item={item} key={item.id} />
  ) : null
)}
   </div>
   </>
  )
}

export default Findevents