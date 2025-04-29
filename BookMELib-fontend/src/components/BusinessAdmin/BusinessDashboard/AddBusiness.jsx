import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import useRegisterBusinessStore from "@/stores/registerBusinessStore";
import { useState } from "react";

const AddBusiness = ({ onClose }) => {
  const { registerBusinessAdmin, loading } = useRegisterBusinessStore();

  const initialFormData = {
    name: "",
    description: "",
    address: "",
    email: "",
    phone_number: "",
    status: "Active", // 👈 Default status
    admin_user: {
      email: "",
      password: "",
      confirmPassword: "",
      first_name: "",
      last_name: "",
      user_type: "business_admin",
      address: "",
      phone_number: "",
      status: "Active",
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("admin_")) {
      const key = name.replace("admin_", "");
      setFormData((prev) => ({
        ...prev,
        admin_user: {
          ...prev.admin_user,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.admin_user.password !== formData.admin_user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { confirmPassword, ...adminData } = formData.admin_user;

    const registrationData = {
      ...formData,
      admin_user: adminData,
    };

    const success = await registerBusinessAdmin(registrationData);

    if (success) {
      setFormData(initialFormData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] max-h-[90vh] overflow-y-auto rounded-md shadow-lg relative p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <Icon path={mdiClose} size={1} />
        </button>

        <h2 className="text-2xl font-semibold mb-6">Create Business & Admin</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business Info */}
          <div>
            <h3 className="text-lg font-medium mb-2">Business Information</h3>
            <div className="space-y-4">
              <Input
                label="Business Name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextArea
                label="Description"
                id="description"
                value={formData.description}
                onChange={handleChange}
              />
              <Input
                label="Address"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />

              <input type="hidden" name="admin_status" value="Active" />

              <Input
                label="Business Email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Admin Info */}
          <div>
            <h3 className="text-lg font-medium mb-2">Admin User Information</h3>
            <div className="space-y-4">
              <Input
                label="First Name"
                id="admin_first_name"
                value={formData.admin_user.first_name}
                onChange={handleChange}
              />
              <Input
                label="Last Name"
                id="admin_last_name"
                value={formData.admin_user.last_name}
                onChange={handleChange}
              />

              <input type="hidden" name="status" value="Active" />

              <Input
                label="Admin Email"
                id="admin_email"
                type="email"
                value={formData.admin_user.email}
                onChange={handleChange}
              />
              <Input
                label="Password"
                id="admin_password"
                type="password"
                value={formData.admin_user.password}
                onChange={handleChange}
              />
              <Input
                label="Confirm Password"
                id="admin_confirmPassword"
                type="password"
                value={formData.admin_user.confirmPassword}
                onChange={handleChange}
              />
              <Input
                label="Address"
                id="admin_address"
                value={formData.admin_user.address}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                id="admin_phone_number"
                value={formData.admin_user.phone_number}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-4 py-2 w-full bg-black text-white rounded-sm"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Register Business"}
          </button>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, id, type = "text", value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border rounded-sm"
    />
  </div>
);

const TextArea = ({ label, id, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      rows="3"
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border rounded-sm"
    />
  </div>
);

export default AddBusiness;
