import { useEffect, useState } from "react";
import GlobalSearchBar from "../../components/Global/Common/GlobalSearchBar";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import { useLocation } from "react-router-dom";
import useUserStore from "../../stores/userStore";

const EditeUser = () => {
  const location = useLocation();
  const user = location.state?.user;
  return (
    <div className="flex">
      <aside className="h-screen bg-gray-100 md:w-[20%] lg:w-[23%]" />
      <main className="mx-3 mt-14 w-full px-3 md:w-[98%]">
        {/* Search Bar */}
        <div className="mx-auto mb-6 flex max-w-[100%] items-center justify-between">
          <div className="w-1/2 max-w-xl px-6">
            <GlobalSearchBar className="w-full">
              <input
                placeholder="Search"
                className="block w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-white dark:text-white"
              />
            </GlobalSearchBar>
          </div>

          {/* User Account Info */}
          <div className="flex items-center space-x-3">
            <Icon
              path={mdiAccountCircle}
              size={1.5}
              className="text-gray-700"
            />
            <div className="leading-tight">
              <p className="font-medium text-gray-800">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        </div>
        <UserProfileAccount user={user} />
      </main>
    </div>
  );
};

const UserProfileAccount = ({ user }) => {
  const { updateUser } = useUserStore();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const HandleUserUpdate = async () => {
    if (!user?.id) return;
    try {
      await updateUser(user.id, form);
      alert("User updated successfully!");
    } catch (error) {
      alert("Failed to update user.");
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      setForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        address: user.address || "",
        phone_number: user.phone_number || "",
        email: user.email || "",
        password: "",
      });
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto mb-10 mt-3 max-w-5xl rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800">
      <form className="space-y-8">
        {/* Business Info */}
        <section>
          <h3 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
            Business Info
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:border-gray-300 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:border-gray-300 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:border-gray-300 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone Number"
              value={form.phone_number}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:border-gray-300 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mt-5">
            <button
              type="button"
              onClick={HandleUserUpdate}
              className="rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition"
            >
              Update User
            </button>
          </div>
        </section>

        {/* Security Account */}
        <section className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
            Security Account
          </h3>

          <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-300 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={HandleUserUpdate}
                className="rounded-md bg-gray-300 px-6 py-2 text-sm font-semibold text-black transition"
              >
                Change Email
              </button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-gray-300 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={HandleUserUpdate}
                className="rounded-md bg-gray-300 px-6 py-2 text-sm font-semibold text-black transition"
              >
                Change Password
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default EditeUser;
