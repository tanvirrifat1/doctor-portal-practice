import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOption] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('AppointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])

    return (
        <section className='mt-16'>
            <p className='font-bold text-secondary text-center'> Available Appointment on:{format(selectedDate, 'PP')}</p>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;