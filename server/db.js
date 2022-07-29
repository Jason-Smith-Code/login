const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("successfully connected to database");
    } catch(error) {
        console.log("could not connect to database");
        console.log(error);
    }
}