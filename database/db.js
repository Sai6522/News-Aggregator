import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect("mongodb+srv://venkatasaiprasadp:Sai65227239$@user.snyy0vz.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("db connected")
    
  }
  catch (error) {
    console.error(error);
  }
}

Connection()
.then(() => console.log('connected'))
export default Connection;