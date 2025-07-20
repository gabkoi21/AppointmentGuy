import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import BusinessAction from "./BusinessAction";
import StatusBadge from "../../Global/Common/StatusBadge";

import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

export interface BusinessRowProps {
  business) => void;
  activeActionId,
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
    setActiveActionId(isActionOpen ? null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionRef.current &&
        !actionRef.current.contains(event.target as Node)
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
    <tr className="border-b hover).format("MMM DD, YYYY") : "N/A"}
      </td>
      <td className="px-14 py-2">{appointmentCount}</td>
      <StatusBadge status={status} />
      <td className="relative px-3 py-4" ref={actionRef}>
        <button
          onClick={handleActionClick}
          aria-label="Toggle business actions"
          className="rounded p-1 transition-colors duration-200 hover) => setActiveActionId(null)}
          />
        )}
      </td>
    </tr>
  );
};

export default BusinessRow;
