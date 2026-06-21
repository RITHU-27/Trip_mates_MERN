const mongoose = require('mongoose');
const signin = require('../models/signin');
const booking = require('../models/booking');
const contact = require('../models/contact');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/trip_mates');
    console.log('Connected to MongoDB database: trip_mates');
    console.log('\n=== SIGNIN OPERATIONS ===');
    const user = await signin.create({
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123'
    });
    console.log('Created user:', user);
    const allUsers = await signin.find();
    console.log('All users:', allUsers);
    await signin.updateOne(
        { email: 'john@example.com' },
        { username: 'john_updated' }
    );
    console.log('Updated user username');
    console.log('\n=== BOOKING OPERATIONS ===');
    const newBooking = await booking.create({
        username: 'john_doe',
        email: 'john@example.com',
        destination: 'Bali',
        departureDate: new Date('2024-06-15'),
        returnDate: new Date('2024-06-25'),
        numberOfPeople: 2,
        totalPrice: 2500,
        status: 'pending'
    });
    console.log('Created booking:', newBooking);
    const allBookings = await booking.find();
    console.log('All bookings:', allBookings);
    await booking.updateOne(
        { destination: 'Bali' },
        { status: 'confirmed' }
    );
    console.log('Updated booking status to confirmed');
    console.log('\n=== CONTACT OPERATIONS ===');
    const newContact = await contact.create({
        name: 'Jane Smith',
        email: 'jane@example.com',
        subject: 'Trip Inquiry',
        message: 'I would like to know more about your Bali tour packages.',
        status: 'unread'
    });
    console.log('Created contact:', newContact);
    const allContacts = await contact.find();
    console.log('All contacts:', allContacts);
    await contact.updateOne(
        { subject: 'Trip Inquiry' },
        { status: 'read' }
    );
    console.log('Updated contact status to read');
    console.log('\n=== FINAL SUMMARY ===');
    
    const finalUsers = await signin.find();
    const finalBookings = await booking.find();
    const finalContacts = await contact.find();
    
    console.log('Total users:', finalUsers.length);
    console.log('Total bookings:', finalBookings.length);
    console.log('Total contacts:', finalContacts.length);
    
    console.log('\nDatabase operations completed successfully!');
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
}
