import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useBusinessStore from "@/stores/businessStore";
import { useNavigate } from "react-router-dom";

const StarIcon = ({ filled }) => (
  <div
    className={`text-[${filled ? "#ea2832" : "#d6aeb0"}]`}
    data-icon="Star"
    data-size="20px"
    data-weight={filled ? "fill" : "regular"}
  >
    <svg
      xmlns="http,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
      ) : (
        <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
      )}
    </svg>
  </div>
);

const ReviewStars = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} filled={star <= rating} />
      ))}
    </div>
  );
};

const NavigationTabs = ({ activeTab, onTabChange }) => {
  const tabs = ["Overview", "Services", "Reviews"];

  return (
    <div className="flex border-b border-[#e7d0d1] px-4 gap-8">
      {tabs.map((tab) => (
        <a
          key={tab}
          className={`flex flex-col items-center justify-center border-b-[3px] ${
            activeTab === tab
              ? "border-b-[#ea2832] text-[#1b0e0e]"
              : "border-b-transparent text-[#994d51]"
          } pb-[13px] pt-4`}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onTabChange(tab);
          }}
        >
          <p
            className={`text-sm font-bold leading-normal tracking-[0.015em] ${
              activeTab === tab ? "text-[#1b0e0e]" : "text-[#994d51]"
            }`}
          >
            {tab}
          </p>
        </a>
      ))}
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const handdleBookClick = () => {
    navigate(`/userdashboard/bookappointment/${service.id}`);
  };

  return (
    <>
      <div className="">
        <p className="text-[#1b0e0e] text-base font-medium leading-normal line-clamp-1">
          {service.name}
        </p>
        <p className="text-[#994d51] text-sm font-normal leading-normal line-clamp-2">
          ${service.price}
        </p>
      </div>
      <div>
        <button
          onClick={handdleBookClick}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-medium leading-normal w-fit"
        >
          <span className="truncate">Book</span>
        </button>
      </div>
    </>
  );
};

const ReviewCard = ({ review }) => (
  <div className="flex flex-col gap-3 bg-[#fcf8f8]">
    <div className="flex items-center gap-3">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
        style={{ backgroundImage)` }}
      />
      <div className="flex-1">
        <p className="text-[#1b0e0e] text-base font-medium leading-normal">
          {review.name}
        </p>
        <p className="text-[#994d51] text-sm font-normal leading-normal">
          {review.time}
        </p>
      </div>
    </div>
    <ReviewStars rating={review.rating} />
    <p className="text-[#1b0e0e] text-base font-normal leading-normal">
      {review.comment}
    </p>
  </div>
);

const reviewData = [
  {
    id,
    name,
    time,
    rating,
    comment,
    avatar,
  },
  {
    id,
    name,
    time,
    rating,
    comment, but the waiting area could be more comfortable. Overall, I was satisfied with the results.",
    avatar,
  },
  {
    id,
    name,
    time,
    rating,
    comment, and the services are top-notch. I always leave feeling refreshed and beautiful.",
    avatar,
  },
];

const Services = () => {
  const { businessId } = useParams();
  const { businesses, fetchBusinesses } = useBusinessStore();
  const [business, setBusiness] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);

  useEffect(() => {
    if (businesses && businessId) {
      const selected = businesses.find(
        (b) => String(b.id) === String(businessId)
      );
      setBusiness(selected);
    }
  }, [businessId, businesses]);

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">
              {business?.name || "Salon Name"}
            </p>
            <p className="text-[#994d51] text-sm font-normal leading-normal">
              4.8 (120 reviews) {business?.address || ""}
            </p>
          </div>
        </div>
        <div className="pb-3">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div className="flex w-full grow bg-[#fcf8f8] @container p-4">
          <div className="w-full gap-1 overflow-hidden bg-[#fcf8f8] @[480px]:gap-2 aspect-[3/2] rounded-lg grid grid-cols-[2fr_1fr_1fr]">
            {/* Gallery Images */}
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
              style={{
                backgroundImage)',
              }}
            />
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
              style={{
                backgroundImage)',
              }}
            />
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
              style={{
                backgroundImage)',
              }}
            />
          </div>
        </div>
        {activeTab === "Overview" && (
          <>
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              About
            </h2>
            <p className="text-[#1b0e0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {business?.about || "about information here."}.
            </p>
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Contact
            </h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e7d0d1] py-5">
                <p className="text-[#994d51] text-sm font-normal leading-normal">
                  Address
                </p>
                <p className="text-[#1b0e0e] text-sm font-normal leading-normal">
                  {business?.address || ""}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e7d0d1] py-5">
                <p className="text-[#994d51] text-sm font-normal leading-normal">
                  Phone
                </p>
                <p className="text-[#1b0e0e] text-sm font-normal leading-normal">
                  {business?.phone_number || ""}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e7d0d1] py-5">
                <p className="text-[#994d51] text-sm font-normal leading-normal">
                  Email
                </p>
                <p className="text-[#1b0e0e] text-sm font-normal leading-normal">
                  {business?.email || ""}
                </p>
              </div>
            </div>
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Hours
            </h2>{" "}
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              {[
                { day, hours,
                { day, hours,
                { day, hours,
                { day, hours,
                { day, hours,
                { day, hours,
                { day, hours,
              ].map(({ day, hours }) => (
                <div
                  key={day}
                  className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e7d0d1] py-5"
                >
                  <p className="text-[#994d51] text-sm font-normal leading-normal">
                    {day}
                  </p>
                  <p className="text-[#1b0e0e] text-sm font-normal leading-normal">
                    {hours}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}{" "}
        {activeTab === "Services" && (
          <>
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Services
            </h2>
            <div className="grid grid-cols-1 md) => (
                <ServiceCard key={service.id} service={service} />
              )) || (
                <p className="text-[#994d51] text-sm font-normal leading-normal">
                  No services available
                </p>
              )}
            </div>
          </>
        )}
        {activeTab === "Reviews" && (
          <>
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Reviews
            </h2>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-[#fcf8f8] p-4">
              {reviewData.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
