const mongoose = require('mongoose');

const DatabaseConnection = function (){
          try{

            mongoose.connect('mongodb://localhost:27017/surgego');
            console.log("Database is connected");

          }
          catch(error){
              console.log(error);
          }
}


DatabaseConnection();