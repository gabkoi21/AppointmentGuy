import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import BusinessAction from "./BusinessAction";
import StatusBadge from "../../Global/Common/StatusBadge";
import PropTypes from "prop-types";

import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

const BusinessRow = ({
  business,
  appointments,
  setActiveActionId,
  activeActionId,
}) => {
  const actionRef = useRef(null);

  const {
    id,
    name = "N/A",
    status = "Unknown",
    timestamp,
    users = [],
  } = business;

  const isActionOpen = activeActionId === id;

  const handleActionClick = (event) => {
    event.stopPropagation();
    setActiveActionId(isActionOpen ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionRef.current &&
        !actionRef.current.contains(event.target)
      ) {
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

  const admin = users.find((user) => user.user_type === "business_admin");
  const appointmentCount =
    appointments.filter((appt) => appt.business_id === id).length || 0;

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">
        {name}
      </td>
      <td className="px-4 py-2">
        {admin ? `${admin.first_name} ${admin.last_name}` : "N/A"}
      </td>
      <td className="px-4 py-4">
        {timestamp ? dayjs(timestamp).format("MMM DD, YYYY") : "N/A"}
      </td>
      <td className="px-14 py-2">{appointmentCount}</td>
      <StatusBadge status={status} />
      <td className="relative px-3 py-4" ref={actionRef}>
        <button
          onClick={handleActionClick}
          aria-label="Toggle business actions"
          className="rounded p-1 transition-colors duration-200 hover:bg-gray-100"
        >
          <Icon path={mdiDotsVertical} size={1} />
        </button>

        {isActionOpen && (
          <BusinessAction
            business={business}
            userId={id}
            isActive={status === "Active"}
            onClose={() => setActiveActionId(null)}
          />
        )}
      </td>
    </tr>
  );
};

BusinessRow.propTypes = {
  business: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    status: PropTypes.any,
    timestamp: PropTypes.string,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        user_type: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
      })
    ),
  }).isRequired,
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      business_id: PropTypes.number,
    })
  ).isRequired,
  setActiveActionId: PropTypes.func.isRequired,
  activeActionId: PropTypes.number,
};

export default BusinessRow;
