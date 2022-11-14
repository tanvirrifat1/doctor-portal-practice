import React from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            name,
            slot,
            email,
            phone
        }

        console.log(booking)
        setTreatment(null)
        toast.success('Appointment successful', { autoClose: 500 })
    }

    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-8'>
                        <input type="text" disabled value={date} className="input input-bordered input-primary w-full" />
                        <select name='slot' className="select select-bordered w-full ">

                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-primary w-full" />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered input-primary w-full" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-primary w-full" />
                        <div className='mt-6'>
                            <button className="btn text-white btn-active btn-secondary w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;