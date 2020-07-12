const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
	res.send(
		"This domain is not for sale. Call or text +2348188209365 if you have the nerve to change my mind"
	);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
