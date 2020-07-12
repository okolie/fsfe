const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
	res.send('Contact domain administrator on +2348188209365 for more info');
});

app.listen(port, ()=>console.log(`Server running on port ${port}!`));
