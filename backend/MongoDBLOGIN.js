function Login(data){
  const MongoClient = require('mongodb').MongoClient;

    const url = "mongodb+srv://Admin:Admin@cluster0.szzdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    const client = new MongoClient(url);
    
    async function run() {
      try {
        await client.connect();
    
        const database = client.db("USERS");
        const userlist = database.collection("UserList");

        let query = { 
          Email : data.Email,
          Password: data.Password                    
        };

        const user = await userlist.findOne(query);

        if(user){
            return {status:'ok',why:'Succesfully find',Email:user.Email}
        }else{
            return {status:'bad',why:'not found'}
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
module.exports = Login;