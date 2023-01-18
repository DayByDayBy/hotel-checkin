import { removeBooking } from "../services/BookingServices";

const Booking = ({ booking, deleteBooking }) => {

    const handleClick = () => {
        removeBooking(booking._id)
            .then(() =>{
                deleteBooking(booking._id)
            })
    }

    const handleCheckin = () => {
        booking.checked_in = true
    }

    return (
        <div>
            <h3>{booking.name}</h3>
            <p>{booking.email}</p>
            <br></br>
            <button onClick={handleClick}>Delete</button>
            <button onClick={handleCheckin}>Check in</button>
        </div>
    )
}

// this is some text
// this is some text
// this is some text
// this is some text

export default Booking;