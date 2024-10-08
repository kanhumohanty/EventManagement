import mongoose from "mongoose";

const eventSchema=mongoose.Schema({
    heading: {
        type: String,
        required: true,
      },
      date: {
        year: {
          type: Number,
          required: true,
        },
        month: {
          type: String,
          required: true,
        },
      },
      location: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
    
      },
      img: {
        type: String,
        required: true,
      },
});

const Event=mongoose.model("Event",eventSchema);

export default Event;
