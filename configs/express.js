import bodyParser from 'body-parser';
require('./models');
const expressFile = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  //app.use(morgan("dev", { "stream": logger.stream }));

  app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PATCH, DELETE, OPTIONS"
    );
    next();
  });

  // app.use('/users', users);
  //Index route
  app.get("/", (req, res) => {
    res.send("Invalid endpoint!");
  });
};

export default expressFile;





//swagger
// import swaggerUi from 'swagger-ui-express';
// import swaggerSpec from  './config/swagger';
// app.get('/swagger.json', function (req, res) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerSpec);
// });
// app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));