import { useParams } from "react-router-dom";
import { salonData } from "../../data/SalonImage";

const SalonDetails = () => {
  const { id } = useParams();

  // Find the specific salon based on the id from URL
  const salon = salonData.find((salon) => salon.id === parseInt(id));

  if (!salon) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-[#994d51] text-xl">Salon not found</p>
      </div>
    );
  }

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="p-4">
          <div className="flex flex-col gap-6">
            {/* Salon Image */}
            <div
              className="w-full h-[400px] bg-center bg-no-repeat bg-cover rounded-lg"
              style={{ backgroundImage: `url("${salon.image}")` }}
            />

            {/* Salon Info */}
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-[#1b0e0e] text-3xl font-bold mb-2">
                  {salon.name}
                </h1>
                <p className="text-[#994d51] text-lg mb-4">
                  {salon.rating} ({salon.reviews} reviews)
                </p>
                <p className="text-[#994d51] text-lg">{salon.description}</p>
              </div>

              {/* Additional salon details can be added here */}
              <div className="bg-[#f3e7e8] p-6 rounded-lg">
                <h2 className="text-[#1b0e0e] text-xl font-bold mb-4">
                  Contact Information
                </h2>
                <p className="text-[#994d51]">
                  {salon.address || "Address not available"}
                </p>
                <p className="text-[#994d51]">
                  {salon.phone || "Phone not available"}
                </p>
                <p className="text-[#994d51]">
                  {salon.email || "Email not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonDetails;
