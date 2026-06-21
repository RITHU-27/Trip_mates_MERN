const mongoose = require('mongoose');
const signin = require('../models/signin');
const booking = require('../models/booking');
const contact = require('../models/contact');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/trip_mates');
    console.log('Connected to MongoDB database: trip_mates');

    // Clear all collections
    await signin.deleteMany({});
    await booking.deleteMany({});
    await contact.deleteMany({});
    
    console.log('All collections cleared successfully!');
    
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
}
