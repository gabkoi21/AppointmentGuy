import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";

function Login() {
  const { login, loading, error } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email, password);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    useAuthStore.setState({ loading, error);

    try {
      const userType = await login(formData); // ✅ Get user_type directly

      if (userType) {
        if (userType === "super_admin") {
          navigate("/Admindashboard", { replace);
        } else if (userType === "customer") {
          navigate("/userdashboard", { replace);
        } else if (userType === "business_admin") {
          navigate("/bussinessadminboard", { replace);
        } else {
          useAuthStore.setState({
            error,
          });
        }
      } else {
        useAuthStore.setState({ error);
      }
    } finally {
      useAuthStore.setState({ loading);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-sm text-gray-600 mt-1">
            Sign in to continue using{" "}
            <span className="font-medium text-gray-900">AppointmentGuy</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  focus) => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <Icon
                  path={showPassword ? mdiEyeOff);
}

export default Login;
