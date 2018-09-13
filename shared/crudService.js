let crudService = {};

/*________________________________________________________________________              
    * @Method :         SaveRecord                             
    * @Purpose:         save data in schema                                      
    * @Return:          save Record data
______________________________________________________________________*/
crudService.saveRecord = (schema, payloads) => {
  return new Promise((resolve, reject) => {
    let collection = new schema(payloads);
    collection.save((err, _response) => {
        if(err) reject(err);
        else resolve(_response);
    });
  });
};

/*________________________________________________________________________              
    * @Method :         getDetail                             
    * @Purpose:         get detail from collection                                       
    * @Return:          detail json
______________________________________________________________________*/

crudService.getOneRecord = (schema,query) => {
    return new Promise((resolve,reject) =>{
        schema.findOne(query,(err,_response) =>{
            if(err) reject(err);
            else resolve(_response);
        })
    }); 
}



export default crudService;
