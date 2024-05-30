const swaggerOptions = {
    customCssUrl: '/swagger-dark.css',
    customCss: 
        //Removes the Swagger top bar
        '.swagger-ui .topbar { display: none } ' + 
        //Removes the links section from the UI to reduce clutter
        '.swagger-ui .response-col_links { display: none }'
};

module.exports = {
    swaggerOptions
};