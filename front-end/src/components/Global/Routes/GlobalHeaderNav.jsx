import { useState } from "react";
import Icon from "@mdi/react";
import { mdiAccount, mdiMenu, mdiClose } from "@mdi/js";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import useUserStore from "@/stores/userStore";

const GlobalHeaderNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const currentUser = useUserStore((state) => state.currentUser);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 flex h-10 items-center bg-white p-4 px-6 shadow">
        {/* Inject custom nav/content here */}
        <div className="mx-6 flex-1">{children}</div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <div onClick={toggleMenu} className="cursor-pointer md)}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-white shadow-lg md)}
    </header>
  );
};

export default GlobalHeaderNav;
