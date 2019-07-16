const express = require("express");
const connectDB = require("./config/db");

const app = express();

// To connect database
{
  connectDB();
}
// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/hotelauth", require("./routes/api/hotelAuth"));
app.use("/api/hotelposts", require("./routes/api/hotelPost"));
app.use("/api/hotelprofile", require("./routes/api/hotelProfile"));
app.use("/api/hotelusers", require("./routes/api/hotelUsers"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
