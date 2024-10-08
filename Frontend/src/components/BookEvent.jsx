import React from 'react'

function BookEvent() {
  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Event Registration
        </h2>

        {/* Event Name and Date */}
        <div className="flex justify-between gap-4">
          {/* Event Name */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="event-name" className="text-gray-700 font-semibold mb-2">
              Event Name
            </label>
            <input
              id="event-name"
              type="text"
              placeholder="Enter event name"
              className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="event-date" className="text-gray-700 font-semibold mb-2">
              Event Date
            </label>
            <input
              id="event-date"
              type="date"
              className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-6">
          <label className="text-gray-700 font-semibold mb-2 block">Payment Options</label>
          
          {/* Payment Radio Buttons */}
          <div className="flex items-center gap-4 mb-4">
            <input type="radio" id="credit-card" name="payment" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="credit-card" className="text-gray-700">Credit Card</label>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <input type="radio" id="paypal" name="payment" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="paypal" className="text-gray-700">PayPal</label>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <input type="radio" id="bank-transfer" name="payment" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="bank-transfer" className="text-gray-700">Bank Transfer</label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


export default BookEvent