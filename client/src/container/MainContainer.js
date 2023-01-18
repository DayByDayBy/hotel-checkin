import { useState, useEffect } from 'react'
import Booking from "../components/Booking"
import BookingList from "../components/BookingList"
import BookingForm from '../components/BookingForm'
import { getBookings } from '../services/BookingServices'




const MainContainer = () => {

    const [allBookings, setAllBookings] = useState([]);
    useEffect(() =>{
        getBookings()
            .then((bookings) => {
        setAllBookings(bookings)
            });
    }, [])


    const addBooking = (formData) => {
        const temp = [...allBookings]
        temp.push(formData)
        setAllBookings(temp);
    }

    const deleteBooking = (id) => {
        const newBookings = allBookings.filter((booking) => {
            return booking._id !== id
        })
        setAllBookings(newBookings)
    }


    return (
        <>
            <h1> Welcome to the Hotel Clanecodia</h1>
            <p> PLEASE ENJOY YOUR STAY</p>
            <div className='bookings'>
                <BookingForm addBooking = {addBooking}/>
                <BookingList  allBookings={allBookings} deleteBooking={deleteBooking}/>
            </div>
        </>
    )
}




export default MainContainer