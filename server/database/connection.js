const mongoose = require('mongoose');

// const connectDB = async ()=> {
//     try {
//         const con = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log(`MongoDB Connected: ${con.connection.host}`);

//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }

const connectDB = async ()=> {
    
    try{
        const con = mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`MongoDB Connected`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// const connectDB = mongoose.connection;
// connectDB.on('error', console.error.bind(console, 'Connection Error: '));

// connectDB.once('open', function(){
//     console.log("Database Connected");
// });


module.exports = connectDB;