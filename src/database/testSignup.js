const mongoose = require('mongoose');
const signin = require('../models/signin');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/trip_mates');
    console.log('Connected to MongoDB database: trip_mates');

    // Clear existing users for clean test
    await signin.deleteMany({});
    console.log('Cleared all users');

    // Test signup process
    const newUser = {
        username: 'newuser',
        email: 'newuser@example.com',
        password: 'newpass123'
    };

    console.log('Creating new user:', newUser);
    
    const createdUser = await signin.create(newUser);
    console.log('✅ User created successfully:', createdUser);

    // Test login with the new user
    console.log('\nTesting login with new user...');
    const loginUser = await signin.findOne({ email: newUser.email });
    
    if (loginUser) {
        console.log('✅ User found for login');
        if (loginUser.password === newUser.password) {
            console.log('✅ Password match - Login should work!');
        } else {
            console.log('❌ Password mismatch');
        }
    } else {
        console.log('❌ User not found for login');
    }
    
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
}
