import mongoose from "mongoose";

const Connection = async(username,password) => {
    const DB_URI = `mongodb://${username}:${password}@ac-ctekj6b-shard-00-00.gqzw0ur.mongodb.net:27017,ac-ctekj6b-shard-00-01.gqzw0ur.mongodb.net:27017,ac-ctekj6b-shard-00-02.gqzw0ur.mongodb.net:27017/?ssl=true&replicaSet=atlas-ri0mbo-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log("Database Connected Successfully");
    }catch(error){
        console.log("Error while connecting to database",error.message);
    }
}

export default Connection;