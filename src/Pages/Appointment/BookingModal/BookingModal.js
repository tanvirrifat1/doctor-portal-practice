import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-8'>
                        <input type="text" disabled value={date} className="input input-bordered input-primary w-full" />
                        <select className="select select-bordered w-full ">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
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