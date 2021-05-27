const express = require("express")
const app = express();
const port = 8000;
const cors = require("cors")


app.use(express.json());// allows us to use JSon
app.use(express.urlencoded({ extended: true}));
app.use(cors())

//^^^^ keep those defined at the top before the requires for config and routes

// create our API routes/endpoints
// app.get("/api/hello", (req,res)=>{
//     res.json({message: "hello Quotes APi"});
// })


//require our other modularised files (routes and config)
require("./server/config/quotes.config")
require("./server/routes/quote.routes")(app)


//make it so the server can listen for requests on port 8000
app.listen(port, ()=>console.log(`Listening on port number ${port}`));
