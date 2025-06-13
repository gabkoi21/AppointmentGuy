import React from "react";
import useBusinessStore from "@/stores/businessStore";

// Reusable function to avoid repeating structure
const createInitialFormData = () => ({
  name: "",
  description: "",
  address: "",
  email: "",
  phone_number: "",
  status: "Active",
  admin_user: {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    user_type: "business_admin",
    address: "",
    phone_number: "",
    status: "Active",
  },
});

const AddBusinessContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen " />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-14">
      <AdminDashboard />
      <AddBusiness />
    </main>
  </div>
);

const AddBusiness = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl ml-6 capitalize font-semibold text-gray-800 dark:text-white mb-3">
          Register New Business and Administrator
        </h1>
      </div>
      <BusinessRegistrationForm />
    </>
  );
};

const BusinessRegistrationForm = () => {
  const { registerBusiness } = useBusinessStore();

  const [formData, setFormData] = React.useState(createInitialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    if (keys.length === 2) {
      const [parent, child] = keys;
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCreateBusiness = async (e) => {
    e.preventDefault();
    try {
      await registerBusiness(formData);
      setFormData(createInitialFormData());
    } catch (error) {
      console.error("Error registering business:", error);
    }
  };

  return (
    <div className="bg-white mt-3  p-6 rounded-xl shadow-xl mb-10 mx-auto">
      <form onSubmit={handleCreateBusiness} className="space-y-6">
        {/* Business Info */}
        <div>
          <h3 className="font-bold text-xl mb-2 text-gray-700 dark:text-gray-300">
            Business Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300
"
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Business Address"
              value={formData.address}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300
"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300"
              required
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Business Phone"
              value={formData.phone_number}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm  focus:outline-none focus:ring-0 focus:border-gray-300
"
              required
            />
          </div>
          <textarea
            name="description"
            placeholder="Business Description"
            value={formData.description}
            onChange={handleChange}
            className="input input-bordered w-full mt-4 rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300
"
            rows={3}
            required
          />
        </div>

        {/* Admin Info */}
        <div>
          <h3 className="font-bold text-xl mb-2 text-gray-700 dark:text-gray-300">
            Business Admin User Info
          </h3>
          <div className="flex gap-3 mb-5">
            <input
              type="text"
              name="admin_user.first_name"
              placeholder="First Name"
              value={formData.admin_user.first_name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300
"
              required
            />

            <input
              type="text"
              name="admin_user.last_name"
              placeholder="Last Name"
              value={formData.admin_user.last_name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300
"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="admin_user.email"
              placeholder="Admin Email"
              value={formData.admin_user.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300
"
              required
            />
            <input
              type="password"
              name="admin_user.password"
              placeholder="Password"
              value={formData.admin_user.password}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300
"
              required
            />
            <input
              type="text"
              name="admin_user.address"
              placeholder="Admin Address"
              value={formData.admin_user.address}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300
"
              required
            />
            <input
              type="text"
              name="admin_user.phone_number"
              placeholder="Admin Phone"
              value={formData.admin_user.phone_number}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:outline-none focus:ring-0 focus:border-gray-300
"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn bg-black w-full mt-4">
          Add Business
        </button>
      </form>
    </div>
  );
};

export default AddBusinessContainer;
