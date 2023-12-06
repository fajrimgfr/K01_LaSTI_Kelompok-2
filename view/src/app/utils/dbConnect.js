// Import library
const mongoose = require("mongoose");

const dbConnect = async () => {
    await mongoose.connect("mongodb+srv://willly:tubeslasti@technest.cjzfojj.mongodb.net/?retryWrites=true&w=majority&ssl=true", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    });
}

export default dbConnect;