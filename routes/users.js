import express from "express";
const router = express.Router();
import userController from '../app/controller/users';

router.post('/api/saveUser',userController.saveUser );

router.post("/progressForm", (req,res)=>{
	console.log("------in progress api ")
	res.send({
		"status":200
	})
})
export default router;
/**
 * @swagger
 * info:
 *   version: 1.0.0
 *   title: backend
 *   contact:
 *      email: "thsunakshi.sdm@smartdatainc.net"
 *   description: StylishApp API's
 *   termsOfService: terms
 *   license:
 *     name: MIT
 *     url: http://opensource.org/licenses/MIT
 * servers:
 * - url: http://localhost:8585
 * basePath: "http://localhost:8585/api/"
 * schemes:
 * - "http"
 * paths:
 *   
 *   /saveUser:
 *     post:
 *       tags:
 *       - "user"
 *       summary: "save user"
 *       description: "save user."
 *       operationId: "saveUser"
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - in: "header"
 *         name: "Email"
 *         description: "user email"
 *         required: true
 *         type: string
 *         format: string
 *       - in: "header"
 *         name: "password"
 *         description: "user password"
 *         required: true
 *         type: string
 *         format: string
 *       responses:
 *         200:
 *           description: "successful operation"
 *         400:
 *           description: "Invalid username/password supplied"
 */