const app = require("./app");
const mongoose = require("mongoose")

const mongoString = "mongodb+srv://viseth:Viseth89$$$@cluster0.ayuiw.mongodb.net/<dbname>?retryWrites=true&w=majority"


mongoose.connect(mongoString, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})


app.listen(3000, () => {
  console.log("Server is now running!");
});