// BookingForm.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  return (
    <div className="space-y-6 p-1">
      <div className="flex flex-row py-3 pl-3 gap-10 w-full">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            📅 Select Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            inline
          />
        </div>

        <div className="w-full max-w-sm">
          <label className="block mb-2 font-semibold text-gray-700">
            ⏰ Select Time
          </label>
          <div className="w-[700px]">
            <DatePicker
              className="w-full"
              selected={selectedTime}
              onChange={setSelectedTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="hh:mm aa"
              inline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
