const mongoose = require('mongoose');
const signin = require('../models/signin');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/trip_mates');
    console.log('Connected to MongoDB database: trip_mates');

    // Check all users
    const users = await signin.find();
    console.log('All users in database:');
    console.log(users);
    
    if (users.length === 0) {
        console.log('No users found! Database is empty.');
        console.log('Creating a test user...');
        
        const testUser = await signin.create({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123'
        });
        console.log('Test user created:', testUser);
    } else {
        console.log(`Found ${users.length} users in database`);
    }
    
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
}
