import React from 'react';
import BookEvent from './BookEvent';
import {Link} from 'react-router-dom'

function Cards({ item }) {
  return (
    <>
      <div className="mt-10 bg-center p-4 m-4 flex justify-center">
        <div className="card bg-base-100 w-80 h-96 shadow-xl overflow-hidden flex flex-col">
          <figure className="h-2/5 overflow-hidden">
            <img
              src={item.img}
              className="w-full h-full object-cover" // Ensures the image fills the space without distorting
            />
          </figure>
          <div className="card-body p-4 h-3/5 flex flex-col justify-between">
            <h2 className="card-title text-lg font-bold">
              {item.heading}
              <div className="badge bg-white text-red-500  ml-1">NEW</div>
            </h2>
            <p className="text-sm  text-white">{item.location}</p>
            <div className="card-actions flex justify-between items-center mt-auto">
              <div className="badge badge-outline">{item.price}</div>
            <Link to="/bookevent">
            <div className="badge badge-outline bg-blue-500 text-black cursor-pointer">Payment/Ticket</div>
            </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
