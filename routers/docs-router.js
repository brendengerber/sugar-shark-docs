//Imports necessary modules
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require("fs");
const YAML = require('yaml');

//Creates the router
const docsRouter = express.Router();

//Configures Swagger
const {swaggerOptions} = require('../config/swagger-config.js');

//Converts yaml to json for swagger-ui-express package
const openapi  = fs.readFileSync('./openapi.yaml', 'utf8');
const openapiJson = YAML.parse(openapi);

//Serves the Swagger UI at /docs
docsRouter.use('/', swaggerUi.serve, swaggerUi.setup(openapiJson, swaggerOptions));

module.exports = docsRouter;