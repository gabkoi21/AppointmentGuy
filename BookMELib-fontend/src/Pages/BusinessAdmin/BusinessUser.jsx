const BusinessUserContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100" />
    <main className="md:w-[98%] w-full mx-3 px-4 mt-20">
      <h1 className="text-2xl capitalize font-semibold text-gray-800 dark:text-white mb-3">
        Manage your User Appointments
      </h1>
      <BusinessUser />
    </main>
  </div>
);

const BusinessUser = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Business User Management</h2>
      {/* Add your business user management logic here */}
      <p className="text-gray-600">Manage your business users here.</p>
    </div>
  );
};

export default BusinessUserContainer;
