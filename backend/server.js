const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const searchRoutes = require("./routes/searchRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/search", searchRoutes);

// Health Check
app.get("/health", (req, res) => {
  res.send("CatalogIQ API is up and running. You can proceed further.");
});

// Error Handler
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
