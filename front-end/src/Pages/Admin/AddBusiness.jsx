import { useState } from "react";
import useBusinessStore from "../../stores/businessStore";

const createInitialFormData = () => ({
  name,
  description,
  address,
  email,
  phone_number,
  status,
  admin_user,
    last_name,
    email,
    password,
    user_type,
    address,
    phone_number,
    status,
  },
});

// Type for nested admin user

// Full form data type

const AddBusinessContainer = () => (
  <div className="flex">
    <aside className="h-screen md);

const AddBusiness = () => (
  <>
    <div>
      <h1 className="mb-3 ml-6 text-2xl font-semibold capitalize text-gray-800 dark);

const BusinessRegistrationForm = () => {
  const { registerBusiness } = useBusinessStore();

  const [formData, setFormData] = useState(createInitialFormData);

  const handleChange = (
    event,
  ) => {
    const { name, value } = event.target;
    const keys = name.split(".");

    if (keys.length === 2) {
      const [parent, child] = keys;
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof FormData]),
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

  const handleCreateBusiness = async (event) => {
    event.preventDefault();
    try {
      await registerBusiness(formData);
      setFormData(createInitialFormData());
    } catch (error) {
      console.error("Error registering business, error);
    }
  };

  return (
    <div className="mx-auto mb-10 mt-3 rounded-xl bg-white p-6 shadow-xl">
      <form onSubmit={handleCreateBusiness} className="space-y-6">
        {/* Business Info */}
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-700 dark);
};

export default AddBusinessContainer;
