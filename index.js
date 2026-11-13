import "dotenv/config";
import express from "express";
import taskRoutes from "./routes/taskRoutes.js"
import { connectToMongoDB } from "./config/db.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/tasks", taskRoutes);

connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})
.catch((error) => console.log(error));
