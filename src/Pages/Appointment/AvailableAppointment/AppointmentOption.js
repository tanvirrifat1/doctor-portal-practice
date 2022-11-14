import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { _id, name, slots } = appointmentOption;
    return (
        <div className='my-10'>
            <div className="card shadow-xl">
                <div className="card-body ">
                    <h2 className="card-title text-primary flex justify-center">{name}</h2>
                    <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(appointmentOption)}
                            htmlFor="bookingModal"
                            className="btn btn-secondary text-white"
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;