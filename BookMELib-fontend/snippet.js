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