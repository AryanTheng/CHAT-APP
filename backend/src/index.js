import express from "express"
import authRoutes from "./routes/auth.route.js";

const app = express();

// Creating routes for authenticating user
app.use("/api/auth", authRoutes)

app.listen(5001, () => {
    console.log("server is running on port 5001");
})