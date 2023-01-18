import Booking from "./Booking"

const BookingList =({allBookings,deleteBooking}) =>{


    const bookingNodes = allBookings.map((booking,index) => {
        return <li className={booking.checked_in ? "true" : "false"} key={index}><Booking  booking={booking} deleteBooking={deleteBooking}/></li>
    })

    return (
        <ul>
        {bookingNodes}
        </ul>
    )
}

export default BookingList