import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the TimeSlot interface
interface TimeSlot {
  id: number;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

const BookingOrder: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [cropType, setCropType] = useState<string>('Fruit');
  const [area, setArea] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isSlotAvailable, setIsSlotAvailable] = useState(true);
  // Fetch available time slots from the backend
  useEffect(() => {
    axios.get('http://localhost:8081/api/timeslots')
      .then(response => {
        setTimeSlots(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the time slots!', error);
      });
  }, []);

  const handleSlotSelection = (slot: TimeSlot) => {
    setSelectedSlot(slot);
  };

  const handleCropChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCropType(e.target.value);
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArea(Number(e.target.value));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const calculateCost = () => {
    return area * 30000;
  };

  const handleSubmit = () => {
    if (!selectedSlot) {
      console.error("Please select a time slot.");
      return;
    }
  
  
    const data = {
      spraySession: {
        timeSlot: {
          id: selectedSlot
        }
      },
      cropType: cropType,
      area: area,
      serviceDate: date,
      location: "702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000"
    };
  
    axios.post('http://localhost:8081/api/orders', data)
      .then(response => {
        alert("Order submitted successfully!");
      })
      .catch(error => {
        console.error("There was an error submitting the order!", error);
      });
  };

  const checkAvailability = () => {
    if (!selectedSlot || !date) {
      console.error("Either selectedSlot or date is missing.");
      return;
    }
  
    console.log("Checking availability for slot:", selectedSlot, "and date:", date);
  
    axios.get('http://localhost:8081/api/spraysessions/check-availability', {
      params: {
        timeSlotId: selectedSlot.id,  // Ensure you're sending the correct ID
        date: date
      }
    })
    .then(response => {
      console.log("Availability check response:", response.data);
      setIsSlotAvailable(response.data); // Assuming the API returns true/false
    })
    .catch(error => {
      console.error("There was an error checking the slot availability!", error);
      setIsSlotAvailable(false);
    });
  };

  useEffect(() => {
    if (selectedSlot && date) {
      checkAvailability();
    }
  }, [selectedSlot, date]);
  


  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Booking Spray Order</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Time Slot</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => handleSlotSelection(slot)}
              className={`p-2 border rounded-md ${
                selectedSlot?.id === slot.id ? 'bg-teal-600 text-white' : 'bg-gray-200'
              }`}
              disabled={slot.isBooked}
            >
              {slot.startTime} - {slot.endTime}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          value="702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh 700000"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Type of Crop</label>
        <select
          value={cropType}
          onChange={handleCropChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
        >
          <option value="Fruit">Fruit</option>
          <option value="Cereal">Cereal</option>
          <option value="Vegetable">Vegetable</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Area (in decare)</label>
        <input
          type="number"
          value={area}
          onChange={handleAreaChange}
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700">Total Cost</label>
        <p className="mt-2 text-xl font-bold text-teal-600">
          {calculateCost().toLocaleString('en-US')} VND
        </p>
        <p className="text-sm text-gray-500">(30,000 VND/decare)</p>
      </div>

      <button 
        onClick={handleSubmit} 
        className="w-full p-2 bg-teal-600 text-white rounded-md"
        disabled={!isSlotAvailable || !selectedSlot}      >
        Confirm and Submit
      </button>
    </div>
  );
};

export default BookingOrder;
