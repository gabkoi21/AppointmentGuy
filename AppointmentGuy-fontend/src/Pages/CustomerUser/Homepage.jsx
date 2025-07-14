import { useState, useEffect } from "react";
import { salonImage } from "../../data/SalonImage";
import { useNavigate } from "react-router-dom";
import useBusinessStore from "../../stores/businessStore";

import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

// This is the main component for the homepage of the customer user
const Homepage = () => {
  return (
    <div>
      <SalonList />
    </div>
  );
};

// SearchBox component for searching salons
const SearchBox = ({ value, onChange }) => {
  return (
    <label className="flex flex-col min-w-40 h-12 w-full">
      <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
        <div
          className="text-[#994d51] flex border-none bg-[#f3e7e8] items-center justify-center pl-4 rounded-l-lg border-r-0"
          data-icon="MagnifyingGlass"
          data-size="24px"
          data-weight="regular"
        >
          <Icon path={mdiMagnify} size={1} />
        </div>
        <input
          placeholder="Search for salons"
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0e0e] focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] focus:border-none h-full placeholder:text-[#994d51] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
          value={value}
          onChange={onChange}
        />
      </div>
    </label>
  );
};

// SalonCard component to display individual salon details
const SalonCard = ({ salon }) => {
  const navigate = useNavigate();

  // Get the image for the salon
  let imageUrl = salonImage[0]?.image;
  if (Array.isArray(salonImage)) {
    const found = salonImage.find((img) => img.id === salon.id);
    imageUrl = found
      ? found.image
      : salonImage[salon.id % salonImage.length]?.image;
  } else if (salonImage?.image) {
    imageUrl = salonImage.image;
  }

  const handleClick = () => {
    navigate(`/userdashboard/services/${salon.id}`);
  };

  return (
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-lg">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <p className="text-[#994d51] text-sm font-normal leading-normal">
            {salon.rating} ({salon.reviews} reviews)
          </p>
          <p className="text-[#1b0e0e] text-base font-bold leading-tight">
            {salon.name}
          </p>
          <p className="text-[#994d51] text-sm font-normal leading-normal">
            {salon.description}
          </p>
        </div>
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 cursor-pointer"
          style={{ backgroundImage: `url("${imageUrl}")` }}
          onClick={handleClick}
          role="button"
        />
      </div>
    </div>
  );
};

// SalonList component to display the list of salons
const SalonList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { businesses, fetchBusinesses } = useBusinessStore();

  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);

  const filteredSalons =
    businesses?.filter(
      (business) =>
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Salons
          </p>
        </div>
        <div className="px-4 py-3">
          <SearchBox
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <h3 className="text-[#1b0e0e] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Nearby
        </h3>
        {filteredSalons.map((salon) => (
          <SalonCard key={salon.id} salon={salon} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
