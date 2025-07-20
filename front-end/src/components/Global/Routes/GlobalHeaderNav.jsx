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
          <div onClick={toggleMenu} className="cursor-pointer md:hidden">
            <Icon
              path={isMenuOpen ? mdiClose : mdiMenu}
              size={1}
              className="text-gray-700"
            />
          </div>

          {/* Profile Button and Dropdown */}
          <div className="relative">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3e7e8] text-[#994d51] transition hover:bg-[#e5cfd1]"
              aria-label="Profile"
              onClick={toggleDropdown}
            >
              <Icon path={mdiAccount} size={0.9} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                <div className="border-b border-gray-100 px-4 py-2">
                  <p className="text-sm font-medium text-gray-900">
                    {currentUser?.first_name
                      ? `${currentUser.first_name} ${currentUser.last_name || ""}`
                      : "Admin Account"}
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <Link
                      to="/Admindashboard/adminprofile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-white shadow-lg md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2"></div>
        </div>
      )}
    </header>
  );
};

export default GlobalHeaderNav;
