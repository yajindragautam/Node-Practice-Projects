const mongoose = require("mongoose");

// Creation Connection With Mongoose
const DB = process.env.LOCAL_URL;
(async()=>{
    try {
        await mongoose.connect(process.env.LOCAL_URL);
        console.log("MongoDB Connected Successfully !...");
    } catch (e) {
            console.error("Error during connection with mongo", e);
  }
})();


