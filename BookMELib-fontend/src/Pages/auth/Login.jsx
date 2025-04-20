import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import useAuthStore from "../../stores/authStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
// import Register from "./Register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      const isSuccess = login(email, password, rememberMe); // You can later pass rememberMe to your auth logic

      if (isSuccess) {
        if (user?.role === "admin") {
          navigate("/Admindashboard", { replace: true });
        } else if (user?.role === "user") {
          navigate("/Userdashboard", { replace: true });
        } else {
          navigate("/Driversboard", { replace: true });
        }
      } else {
        alert("Invalid email or password!");
      }
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      if (user?.role === "admin") {
        navigate("/Admindashboard", { replace: true });
      } else if (user?.role === "user") {
        navigate("/Userdashboard", { replace: true });
      } else {
        navigate("/Driversboard", { replace: true });
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back 👋</h2>
          <p className="text-sm text-gray-600 mt-1">
            Sign in to continue using{" "}
            <span className="font-medium text-teal-600">AppointmentGuy</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm pr-10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <Icon
                  path={showPassword ? mdiEyeOff : mdiEye}
                  size={0.7}
                  color="gray"
                />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <span>No account?</span>
            <Link to="/register">Register</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 uppercase text-white font-semibold text-sm py-2.5 rounded-md transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
