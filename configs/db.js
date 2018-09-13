import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
// mongo connection
const connectToDb = async (config) => {
  var url = `mongodb://${config.host}/${config.dbName}`;
  try {
    await mongoose.connect(url,{ useNewUrlParser: true });
    console.log("Connected to mongo!!!");
  } catch (err) {
      console.log("Could not connect to MongoDB",err)
  }
};

export default connectToDb;
