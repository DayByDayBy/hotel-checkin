import { useState } from "react"
import { getBookings, postBooking } from "../services/BookingServices"

const BookingForm = ({addBooking}) => {
    
   const [formData,setFormData] = useState({
    name:"",
    email:"",
    checked_in:true
   })


    const handleChange = (evt) => {
        const newFormData = Object.assign({}, formData)
        newFormData[evt.target.name] = evt.target.value
        setFormData(newFormData)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const newFormDataName = formData.name.trim()
        const newFormDataEmail = formData.email.trim()
        if (!newFormDataName || !newFormDataEmail) {
            return
        }  
        postBooking(formData).then((data) => {
            addBooking(data)  
        })
        setFormData({
            name:"",
            email:"",
            checked_in:false
           })
    }
    
    return (
        <form>
            <input type="text" value={formData.name} placeholder="name" name="name" required onChange={handleChange}  />
            <input type="text" value={formData.email} placeholder="e-mail" name="email" required onChange={handleChange}  />
            <select name="checked_in" onChange={handleChange}>
                <option value="">Checked in?</option>
                <option value="true">Yes</option>
                <option value="">No</option>
            </select>    
            <button type="submit" onClick={handleSubmit}>Add booking</button>
        </form>
    )
}

export default BookingForm