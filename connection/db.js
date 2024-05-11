const mongoose = require("mongoose");

const dotenv = require('dotenv')
dotenv.config();

exports.connect = () => {
  mongoose.connect("mongodb+srv://khushpatel:z3qyj2KiUogBKMxh@cluster0.pvdf64t.mongodb.net/hirademydb", {
       useNewUrlParser: true,
      useUnifiedTopology: true,
    })
   .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB coonection Failed");
      console.error(error);
      process.exit(1);
    });
};

