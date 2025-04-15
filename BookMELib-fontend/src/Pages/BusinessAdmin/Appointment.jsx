const BusinessAppointmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <BusinessAppointmentPage />
    </main>
  </div>
);

const BusinessAppointmentPage = () => {
  return (
    <>
      <p>This is for the business Appointment page</p>
    </>
  );
};

export default BusinessAppointmentContainer;
