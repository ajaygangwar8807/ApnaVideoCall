import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// ✅ Allow specific frontend origin for CORS
const allowedOrigins = [
  "http://localhost:3000",
  "https://apnavideocall-moyd.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.set("port", process.env.PORT || 8000);
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectionDb = await mongoose.connect("mongodb+srv://imdigitalashish:imdigitalashish@cluster0.cujabk4.mongodb.net/");

  console.log(`✅ MONGO Connected at: ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log(`🚀 Server running on PORT ${app.get("port")}`);
  });
};

start();






// import express from "express";
// import { createServer } from "node:http";

// import { Server } from "socket.io";

// import mongoose from "mongoose";
// import { connectToSocket } from "./controllers/socketManager.js";

// import cors from "cors";
// import userRoutes from "./routes/users.routes.js";

// const app = express();
// const server = createServer(app);
// const io = connectToSocket(server);


// app.set("port", (process.env.PORT || 8000))
// app.use(cors());
// app.use(express.json({ limit: "40kb" }));
// app.use(express.urlencoded({ limit: "40kb", extended: true }));

// app.use("/api/v1/users", userRoutes);

// const start = async () => {
//     app.set("mongo_user")
//     const connectionDb = await mongoose.connect("mongodb+srv://imdigitalashish:imdigitalashish@cluster0.cujabk4.mongodb.net/")

//     console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
//     server.listen(app.get("port"), () => {
//         console.log("LISTENIN ON PORT 8000")
//     });



// }



// start();