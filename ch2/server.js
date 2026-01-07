//the address of this server that is connected to this snetwork is 
//url :- http://localhost:8383
//ip :- 127.0.0.1:8383

const express = require('express');
const app =express();

const PORT = 8383;

let data = ['james']

// Middleware : tellinf express that we expect json data 
app.use(express.json())



// Endpoints :- HTTP verbs (methods) and routes (Or paths)
//methods informs the nature of request and the route is a further 
//subdirectory (basically we direct the request to the body of the code
//to respond to appropriately, and these locations or routes
// are called endpoints)


//assumeing that user might want something

// TYPE 1

// Website endpoints (these are for sending back html and they typically 
// come when user enters the url into a browser)
app.get('/', (req, res) => {
  // this endpoint is the home default page
  // --endpoint no 1--
  res.send(`
    <body style="background:pink;
    color:blue">
      <h1>DATA</h1>
      <p>
        ${JSON.stringify(data)}
      </p>


    </body>


    `)
    
  })

app.get('/dashboard', (req,res) =>{
  res.send('<h1> Dashboard </h1>')
  
})

// TYPE 2 
// API endpoints
// CRUD-methods (Create, Read, Update, Delete)
// create = post read = get
// update = put delete = delete

app.get('/api/data', (req,res) =>{
  console.log("this one for the data only")
  res.send(data)
})

app.post('/api/data', (req,res) => {
  //when user try making a new profile
  // the user clicks the sign up button ater entering the credentials and 
  // their browser is wired out a network request to the server to handle
  // the action
  const newEntry = req.body
  //making a respond
  res.sendStatus(201)
  console.log(newEntry)
})




app.listen(8383, () =>console.log(`Server is running on ${PORT}`));
