//Imports necessary modules
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const { xss } = require('express-xss-sanitizer');

//Creates the server
const app = express();

//Sets the server's port
const PORT = process.env.PORT || 3001;

//Adds helpful logs when server is set to development
if(process.env.NODE_ENV === "development"){
  app.use(morgan('tiny'));
};

//Parses request bodies to json
app.use(express.json());
//Parses request urlencoded data to json
app.use(express.urlencoded({extended: true}));

//Sets up cors
app.use(
  cors({
    //Allows session cookie from browser to pass through
    credentials: true, 
    //Sets the allowed domain to the domain where the front end is hosted
    origin: [process.env.DOCS_URL]
  })
);

//Security measures
app.use(helmet());
app.disable('x-powered-by');
app.use(xss());

//Mounts the api router
const docsRouter = require('./routers/docs-router.js');
app.use('/home', docsRouter);

//Sets up static serving
app.use(express.static(__dirname + '/public'));

//Starts server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
  