use hotel;

db.dropDatabase();

db.bookings.insertMany([

    {
        name: 'Alice',
        email: 'alice@yahoo.za',
        checked_in: false

    },
    {
        name: 'Bill',
        email: 'Bill@yahoo.za',
        checked_in: false

    },
    {
        name: 'Michal',
        email: 'michal@yahoo.co.uk',
        checked_in: true

    },

    {
        name: 'Diomedes',
        email: 'dio@yahoo.za',
        checked_in: true 
        
    }

]
)