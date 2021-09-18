function CreateNewUser(data){
  const MongoClient = require('mongodb').MongoClient;

    const url = "mongodb+srv://Admin:Admin@cluster0.szzdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    const client = new MongoClient(url);
    
    async function run() {
      try {
        await client.connect();
    
        const database = client.db("USERS");
        const userlist = database.collection("UserList");

        const doc = {...data}
    
        const result = await userlist.insertOne(doc);

        if(result){
          return {status:'ok',why:'succesfully register',Email:data.Email}
        }else{
          return {status:'bad',why:'something is gonna wrong'}
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
module.exports = CreateNewUser;