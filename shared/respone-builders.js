
import responseMessages from './responses';
let responseBuilder = {};


/*
    * @Method :    send Success respnse

*/
responseBuilder.success = (res,message,data,language) => {
    console.log("==> ",responseMessages[message][language])
    res.status(200).json({
        success: true,
        message: responseMessages[message][language],
        data: data
      });
    // res.send({
    //     status: 200,
    //     message: responseMessages[message][language],
    //     data: data
    // })
}

export default responseBuilder;