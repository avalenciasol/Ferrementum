const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Ferrementum API',
      version: '1.0.0',
      description: 'API documentation for Ferrementum store',
      contact: {
        name: 'Your Name',
        email: 'your.email@example.com'
      },
      servers: [
        {
          url: 'http://localhost:5001',
          description: 'Development server'
        }
      ]
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log('Swagger docs available at http://localhost:5001/api-docs');
};
