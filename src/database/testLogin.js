const mongoose = require('mongoose');
const signin = require('../models/signin');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/trip_mates');
    console.log('Connected to MongoDB database: trip_mates');

    // Test login logic
    const email = 'john@example.com';
    const password = 'password123';
    
    console.log(`Testing login for email: ${email}`);
    
    // Find user by email
    const user = await signin.findOne({ email });
    if (!user) {
        console.log('❌ User not found');
    } else {
        console.log('✅ User found:', user);
        
        // Check password
        if (user.password !== password) {
            console.log('❌ Password mismatch');
            console.log('Expected:', user.password);
            console.log('Provided:', password);
        } else {
            console.log('✅ Password match - Login should succeed');
        }
    }
    
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
}
