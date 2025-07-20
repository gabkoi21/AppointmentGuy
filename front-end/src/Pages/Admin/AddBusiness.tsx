import { FormEvent, ChangeEvent, useState } from "react";
import useBusinessStore from "../../stores/businessStore";

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

// Type for nested admin user
type AdminUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type: string;
  address: string;
  phone_number: string;
  status: string;
};

// Full form data type
type FormData = {
  name: string;
  description: string;
  address: string;
  email: string;
  phone_number: string;
  status: string;
  admin_user: AdminUser;
};

const AddBusinessContainer = () => (
  <div className="flex">
    <aside className="h-screen md:w-[20%] lg:w-[23%]" />
    <main className="mx-3 mt-14 w-full px-3 md:w-[98%]">
      <AddBusiness />
    </main>
  </div>
);

const AddBusiness = () => (
  <>
    <div>
      <h1 className="mb-3 ml-6 text-2xl font-semibold capitalize text-gray-800 dark:text-white">
        Register New Business and Administrator
      </h1>
    </div>
    <BusinessRegistrationForm />
  </>
);

const BusinessRegistrationForm = () => {
  const { registerBusiness } = useBusinessStore();

  const [formData, setFormData] = useState<FormData>(createInitialFormData);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const keys = name.split(".");

    if (keys.length === 2) {
      const [parent, child] = keys;
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof FormData] as any),
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

  const handleCreateBusiness = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await registerBusiness(formData);
      setFormData(createInitialFormData());
    } catch (error) {
      console.error("Error registering business:", error);
    }
  };

  return (
    <div className="mx-auto mb-10 mt-3 rounded-xl bg-white p-6 shadow-xl">
      <form onSubmit={handleCreateBusiness} className="space-y-6">
        {/* Business Info */}
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-700 dark:text-gray-300">
            Business Info
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Business Address"
              value={formData.address}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Business Phone"
              value={formData.phone_number}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
          </div>
          <textarea
            name="description"
            placeholder="Business Description"
            value={formData.description}
            onChange={handleChange}
            className="input input-bordered mt-4 w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
            rows={3}
            required
          />
        </div>

        {/* Admin Info */}
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-700 dark:text-gray-300">
            Business Admin User Info
          </h3>
          <div className="mb-5 flex gap-3">
            <input
              type="text"
              name="admin_user.first_name"
              placeholder="First Name"
              value={formData.admin_user.first_name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
            <input
              type="text"
              name="admin_user.last_name"
              placeholder="Last Name"
              value={formData.admin_user.last_name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="email"
              name="admin_user.email"
              placeholder="Admin Email"
              value={formData.admin_user.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
            <input
              type="password"
              name="admin_user.password"
              placeholder="Password"
              value={formData.admin_user.password}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
            <input
              type="text"
              name="admin_user.address"
              placeholder="Admin Address"
              value={formData.admin_user.address}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
            <input
              type="text"
              name="admin_user.phone_number"
              placeholder="Admin Phone"
              value={formData.admin_user.phone_number}
              onChange={handleChange}
              className="input input-bordered w-full rounded-sm focus:border-gray-300 focus:outline-none focus:ring-0"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn mt-4 w-full bg-black">
          Add Business
        </button>
      </form>
    </div>
  );
};

export default AddBusinessContainer;
