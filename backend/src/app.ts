import express from "express";
import router from "./route";
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
	res.send("Hello World from backend!");
});
app.use("/", router);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
