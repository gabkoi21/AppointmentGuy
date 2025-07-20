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
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      {filled ? (
        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
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
        style={{ backgroundImage: `url("${review.avatar}")` }}
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
    id: 1,
    name: "Sophia Carter",
    time: "2 months ago",
    rating: 5,
    comment:
      "I had a fantastic experience at The Hair Lounge. The stylist was very professional and gave me a great haircut. I highly recommend this salon!",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC72nznFn78RYzmW3v4mSC08NwL_L8mLHMwrCrnNRrw4DHNlIkpOavnDG0b2A529CNR7lDEUxHLpepG0b0viNOtc4pTJ_75f3GC2ccZ-aGuvCJZ34lA3hV9xcZp-aYFETSN5oLmCY795EDMg_26kkVD9RqXPfqLY9Lu8VcQOULs8DPRy902D8HLBPb1-GJaW1eVDZ7xGK0kPCDxluB38ZDd0GhA1kJDu6AtdlvCyKJBxMt3Zs4bn0vQqQiD73-MWjiCTVgKs3TuZUtp",
  },
  {
    id: 2,
    name: "Liam Bennett",
    time: "3 months ago",
    rating: 4,
    comment:
      "The service was good, but the waiting area could be more comfortable. Overall, I was satisfied with the results.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD15jpD14B4KW6Tz_YAWqQ-KnlW4RyZTeGxOJg2ztFvEsniQhRVXWj2N4JemdD9_-YmUpnUKOY7DPuNrfybZAU1FUvMus5vl01NhNgqVm89Lbk24YBc7Zz9fm6h-C7n4FKwJQo-Loj2REkUQeTL4uy0kMZunsvplzaHeT-Qavkb3JC_hMbB8UWMJ_Ymz0csYsD73jPSI57WRBm_9MVn75BpFY7L07XZ0dZbZaBZm5TE8k-25VZ7cTm7srC1d6P3q2iHvSu-4sG9F6fZ",
  },
  {
    id: 3,
    name: "Olivia Hayes",
    time: "4 months ago",
    rating: 5,
    comment:
      "The Hair Lounge is the best salon in town! The staff is friendly, and the services are top-notch. I always leave feeling refreshed and beautiful.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVGaiGGxj3S0m34jSQR7FUG6rwluL-xhT6zLgRcfblUVXkfDxqvtK3mCDlDuYEo41iqpeUE-kRtgjB2kiMVTyaheO_6K35XNDtS6-5ZPXLV3mPw2EhZmw3gWPJ3K1gmL0zQwmzDGtjetfthKNW80sbq0Lj3FtAzoDnsfLfeiN3sFgq-zjPOooCL1Fbbs2RmsVK3V4x65xlTgl3FSTAqMLNy_yP-KMoPuPUaWunn8qRnqvYhc_PoCvlaFInmf0dmceDVMEeWEw5so5o",
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
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCS8oLJjK6nLmQ4uIPzdn1NsH679RJC24syRzcxXkEZtvpCWNYOnNve3Jxr1v0EeggnONEGZWG6k0avr1KMlqS353DoqhI_ign572x9G7rbUF-2zAw-2UweckrDD5lRAtKbfN6rQFtJ_FoIRQ7V98NV0bxiloA8h8KN72m9PdBcdZLAqBxd286YFMPR7bii6Efpyam5MXifmO8tq-kW1CEfqZeaQd5kKFlctS6yHSq-VB_1-8Q5xZaQMZJV4cHpnggMwBscUI3ho_YB")',
              }}
            />
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj0SQAG_YGNiyx6cViyLSlEP1iod6ZvT8vNitnT1XThFVWBYa3Bqao7XscwN7UXjFWMYQSRr92skJpiWAAz23OPdp3c2rFKS6SWVbonzEyALhCHgHj5hrtwFeZ4viKLuo1zeEzYuZNaljttV_z01wGv_Uq1iXP8V_-BQtbA13SJc-95485exmD4X3bju16smfmsiREb0t47B-iymxiJjM5pC1tcdTLhX4J5HAV1iNQFH1LR0V-C7VjfSIPKVy_8ydq-g1aGKVR3R41")',
              }}
            />
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaRksXD4DbgegjlXNMkocmhY3DPUDribmWV3-xdbivT4NJDY6aGgfSqkL7Mwn6CgdPAEeOVyT5Jp9kPyXrZ_QkVN3AE39ffqeoY501tY1qJP2UVeVm2X9uSOGPgLnhJDB_OJ3xBFnHcPt1XllXVBqKHHE5h9qd99sskGwlnqezNp-lRVpifsfNhynVRz0ZeOrEDhIa-X1--XACeTPItjKH5Orpxq9GXAF9gb2TOBa8dZkIcJEHdfKzq32Kwe0U2inUQCmUAr083hD2")',
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
                { day: "Monday", hours: "9 AM - 6 PM" },
                { day: "Tuesday", hours: "9 AM - 7 PM" },
                { day: "Wednesday", hours: "9 AM - 7 PM" },
                { day: "Thursday", hours: "9 AM - 7 PM" },
                { day: "Friday", hours: "9 AM - 6 PM" },
                { day: "Saturday", hours: "10 AM - 5 PM" },
                { day: "Sunday", hours: "Closed" },
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
              {business?.services?.map((service) => (
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
