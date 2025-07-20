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
      <aside className="h-screen bg-gray-100 md);
};

const UserProfileAccount = ({ user }) => {
  const { updateUser } = useUserStore();
  const [form, setForm] = useState({
    first_name,
    last_name,
    address,
    phone_number,
    email,
    password,
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
        first_name,
        last_name,
        address,
        phone_number,
        email,
        password,
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
    <div className="mx-auto mb-10 mt-3 max-w-5xl rounded-xl bg-white p-6 shadow-xl dark);
};

export default EditeUser;
