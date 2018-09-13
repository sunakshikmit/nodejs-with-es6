import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from'swagger-jsdoc';
import config from './../db/config';
let defaultUrl =  config.dbHost + ':' +  config.serverPort;
console.log(defaultUrl)
	let swaggerDefinition = {
	    info: {
	        title: 'Node with ES6',
	        version: '1.0.0',
	        description: 'API Documentation',
	    },
	    host: defaultUrl,
	    basePath: '/api/v1',
	};

	let options = {
	    swaggerDefinition: swaggerDefinition,
	    apis: ['./routes/*.js'],
	};
	let swaggerSpec = swaggerJSDoc(options);


export default swaggerSpec