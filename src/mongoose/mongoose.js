const mongoose = require("mongoose") ;

mongoose.connect("mongodb://localhost:27017/StudentJsonApi" , {
    useCreateIndex : true,
    useFindAndModify : false,
    useNewUrlParser : true ,
    useUnifiedTopology : true
}).then(() => console.log(`server port is 27017`)).
catch((error) =>{
    console.log(error)
})