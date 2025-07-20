import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import useBusinessStore from "@/stores/businessStore";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { set } from "date-fns";

const Register = () => {
  const { register, loading, error } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    businesses,
    fetchBusinesses,
    loading,
    error,
  } = useBusinessStore();

  const [formData, setFormData] = useState({
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
    address,
    phone_number,
    user_type,
    status,
    business_id, // Changed from empty string to null
  });

  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { confirmPassword, ...registrationData } = formData;
    const success = await register(registrationData);

    if (success) {
      // Clear form first
      setFormData({
        first_name,
        last_name,
        email,
        password,
        confirmPassword,
        address,
        phone_number,
        user_type,
        status,
        business_id, // Changed from empty string to null
      });

      // Then show message and navigate
      alert("Registration successful! Please log in.");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Create Your Account
          </h2>
        </div>

        <form
          onSubmit={async (e) => {
            await handleSignUp(e);
            // Clear form fields after successful registration
            setFormData({
              first_name,
              last_name,
              email,
              password,
              confirmPassword,
              address,
              phone_number,
              user_type,
              status,
              business_id, // Changed from empty string to null
            });
          }}
          className="space-y-5 mb-5"
        >
          {/* First Name */}
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus) => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
              >
                <Icon path={showPassword ? mdiEyeOff) => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
              >
                <Icon
                  path={showConfirmPassword ? mdiEyeOff);
};

export default Register;
