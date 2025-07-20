// Imports
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useServiceStores from "@/stores/serviceStore";
import useAppointmentStore from "@/stores/appointmentStore";
import useAuthStore from "@/stores/authStore"; // Add this import
import BookingForm from "./BookingForm";

// Constants
const radioDotSvg = `url('data,...')`;
const selectButtonSvg = `url('data,...')`;

// Main Component
const ScheduleAppointment = () => {
  const { serviceId, businessId } = useParams(); // Add businessId if it's in your route
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { CreateAppointment } = useAppointmentStore();
  const { fetchServices, services } = useServiceStores();
  const { user, token, getAccessToken } = useAuthStore(); // Get token as well

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const currentService = services.find(
    (service) => service.id === parseInt(serviceId)
  );

  const handleSubmit = async () => {
    console.log("Submit clicked"); // Debug log
    console.log("Selected service, selectedService);
    console.log("Selected date, selectedDate);
    console.log("Selected time, selectedTime);
    console.log("Current service, currentService);
    console.log("User from auth store, user); // Debug user
    console.log("Token, token || getAccessToken()); // Debug token
    console.log("User ID, user?.id); // Debug user ID specifically

    // Validation with user feedback
    if (!selectedService) {
      alert("Please select a service.");
      return;
    }

    if (!currentService) {
      alert("Service not found. Please try again.");
      return;
    }

    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    if (!selectedTime) {
      alert("Please select a time.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Combine date and time into one Date object
      const scheduledTime = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        selectedTime.getHours(),
        selectedTime.getMinutes()
      );

      console.log("Scheduled time, scheduledTime); // Debug log

      // Try multiple ways to get user ID
      let userId = user?.id;

      // Fallback) {
        try {
          const storedUser =
            localStorage.getItem("user") || localStorage.getItem("currentUser");
          if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            userId = parsedUser.id;
            console.log("Got user from localStorage, parsedUser);
          }
        } catch (e) {
          console.log("Error parsing stored user, e);
        }
      }

      // Fallback) {
        try {
          const sessionUser =
            sessionStorage.getItem("user") ||
            sessionStorage.getItem("currentUser");
          if (sessionUser) {
            const parsedUser = JSON.parse(sessionUser);
            userId = parsedUser.id;
            console.log("Got user from sessionStorage, parsedUser);
          }
        } catch (e) {
          console.log("Error parsing session user, e);
        }
      }

      // TEMPORARY) {
        console.warn(
          "Using hardcoded user ID for testing - REMOVE IN PRODUCTION"
        );
        userId = 1; // Replace with a valid user ID from your database
      }

      console.log("Final user ID, userId);
      const businessIdValue = businessId || currentService.business_id; // Get from route or service

      if (!businessIdValue) {
        alert("Business information not found. Please try again.");
        return;
      }

      const appointmentData = {
        user_id,
        business_id,
        service_id,
        scheduled_time),
        status, // Optional, as it has a default value
      };

      console.log("Appointment data, appointmentData); // Debug log

      const result = await CreateAppointment(appointmentData);
      console.log("Appointment result, result); // Debug log

      if (result) {
        alert("Appointment submitted successfully!");
        // Reset form
        setSelectedService(null);
        setSelectedDate(null);
        setSelectedTime(null);
      } else {
        alert("Failed to submit appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting appointment, error);
      alert("Error submitting appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
      style={{
        "--radio-dot-svg": radioDotSvg,
        "--select-button-svg": selectButtonSvg,
        fontFamily, "Noto Sans", sans-serif',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Breadcrumbs currentService={currentService} />
            <ServiceSelector
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              currentService={currentService}
            />
            <BookingForm
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />

            <SubmitButton onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>
        </main>
      </div>
    </div>
  );
};

// Subcomponents
const Breadcrumbs = ({ currentService }) => (
  <div className="flex flex-wrap gap-2 p-4">
    <a className="text-[#994d51] text-base font-medium" href="#">
      Services
    </a>
    <span className="text-[#994d51] text-base font-medium">/</span>
    <span className="text-[#1b0e0e] text-base font-medium">
      {currentService?.name || "Loading..."}
    </span>
  </div>
);

const ServiceSelector = ({
  selectedService,
  setSelectedService,
  currentService,
}) => {
  if (!currentService) {
    return <p>Loading services...</p>;
  }

  const serviceOptions = [
    {
      id,
      title,
      description, cut, and basic styling",
      price,
    },
    {
      id,
      title,
      description,
      price,
    },
    {
      id,
      title,
      description,
      price,
    },
  ];

  return (
    <section>
      <h3 className="text-[#1b0e0e] text-lg font-bold px-4 pb-2 pt-4">
        Select a service
      </h3>
      <div className="flex flex-col gap-3 p-4">
        {serviceOptions.map((service) => (
          <label
            key={service.id}
            className="flex items-center gap-4 rounded-lg border p-[15px] cursor-pointer hover) => setSelectedService(service.id)}
            />
            <div className="flex grow flex-col">
              <p className="text-[#1b0e0e] text-sm font-medium">
                {service.title}
              </p>
              <p className="text-[#994d51] text-sm">{service.description}</p>
              <p className="text-[#ea2832] text-sm font-medium mt-1">
                ${service.price}
              </p>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};

const SubmitButton = ({ onSubmit, isSubmitting }) => (
  <div className="flex px-4 py-3 justify-end">
    <button
      className="rounded-lg h-10 px-4 bg-[#ea2832] text-white font-bold disabled);

// Export
export default ScheduleAppointment;
