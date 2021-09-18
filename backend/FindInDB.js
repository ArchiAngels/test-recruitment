function FindInDB(data,dataUser = false){
    const MongoClient = require('mongodb').MongoClient;


    const url = "mongodb+srv://Admin:Admin@cluster0.szzdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    const client = new MongoClient(url);
    
    async function run() {
      try {
        await client.connect();
    
        const database = client.db("USERS");
        const userlist = database.collection("UserList");

        let query = { Email : data.Email };
        const user = await userlist.findOne(query);

        if(user){
            if(dataUser == true){
              return {status:'ok',why:'find succesfully',user:user}
            }else{
              return {status:'bad',why:'email already registered'}
            }
        }else{
            return {status:'ok',why:'email is free to register'}
        }

        
      }catch(error){
          console.dir(error.stack());
      }
       finally {
        await client.close();
      }
    }
    return run().catch(console.dir);    
}
module.exports = FindInDB;