// code  snippep for fomm  inout fuield 
focus:outline-none focus:ring-0 focus:border-gray-300


// This function used to delete a user or other information
const handleDelete = async () => {
    if (!user?.id) {
      console.error("No user ID provided");
      return;
    }

    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(user.id);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

 

// // Filter salons based on search query
  const filteredSalons =
  businesses?.filter(
    (business) =>
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];



  // This is for dynamic routes 
  <Route path="services/:businessId" element={<ServicePages />} />


  // logout 
  const handleLogout = () => {
    useAuthStore.getState().logout();
  };
  

// close drop down down

  useEffect(() => {
      const handleClickOutside = (event) => {
        if (actionRef.current && !actionRef.current.contains(event.target)) {
          if (activeActionId === id) {
            setActiveActionId(null);
          }
        }
      };
  
      if (isActionOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isActionOpen, activeActionId, id, setActiveActionId]);
  