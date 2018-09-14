import responseBuilder from "../../shared/respone-builders";
import jwt from 'jsonwebtoken';
import crudService from "../../shared/crudService";
import usersModel from "./model";
const userController = {};
const user = {};

/*________________________________________________________________________
    * @Date:            Date                
    * @Method :         register                
    * Created By:       KeyMouseIt                
    * Modified On:      Date                
    * @Purpose:         save user detail                
    * @Param:                           
    * @Return:          save user data
 _______________________________________________________________________*/

userController.register = async (req, res) => {
  try {
    const savedForm = await crudService.saveRecord(usersModel, req.body);
    responseBuilder.success(res, "created_successfully", savedForm, "en");
  } catch (err) {
    res.send("Got error in getAll");
  }
};

/*________________________________________________________________________
    * @Date:            Date                
    * @Method :         register                
    * Created By:       KeyMouseIt                
    * Modified On:      Date                
    * @Purpose:         login user  and generate JWT token                
    * @Param:                           
    * @Return:          save user data
 _______________________________________________________________________*/
userController.login = async (req, res) => {
  let query = {email:req.body.email}
  const _userDetail = await crudService.getOneRecord(usersModel,query);
};

export default userController;
