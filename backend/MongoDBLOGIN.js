function FindUser(data){
    import { MongoClient } from "mongodb";

    const url = "mongodb+srv://Admin:Admin@cluster0.szzdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    const client = new MongoClient(url);
    
    async function run() {
      try {
        await client.connect();
    
        const database = client.db("USERS");
        const userlist = database.collection("UserList");
        
      }catch(error){
          console.dir(error.stack());
      }
       finally {
        await client.close();
      }
    }
    return run().catch(console.dir);    
}
export default FindUser;