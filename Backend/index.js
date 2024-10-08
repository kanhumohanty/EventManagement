import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import eventRoute from "./route/event.route.js"
import cors from "cors";
import userRoute from './route/user.route.js'


dotenv.config();
const app = express()
app.use(cors());

app.use(express.json());

const PORT=process.env.PORT || 4000
const URI=process.env.MONGO_URI;

//connect to mongodb
try {
    mongoose.connect(URI,{ useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
//defining routes
app.use("/event",eventRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})