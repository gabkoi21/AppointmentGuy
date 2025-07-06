import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import BusinessAction from "./BusinessAction";
import StatusBadge from "../../../components/Global/Styles/StatusBadge";

import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

interface User {
  user_type: string;
  first_name?: string;
  last_name?: string;
}

interface Business {
  id: number;
  name?: string;
  status?: any;
  timestamp?: string;
  users?: User[];
}

interface Appointment {
  business_id: number | null;
}

export interface BusinessRowProps {
  business: Business;
  appointments: Appointment[];
  setActiveActionId: (id: number | null) => void;
  activeActionId: number | null;
}

const BusinessRow = ({
  business,
  appointments,
  setActiveActionId,
  activeActionId,
}: BusinessRowProps) => {
  const actionRef = useRef<HTMLTableCellElement>(null);

  const {
    id,
    name = "N/A",
    status = "Unknown",
    timestamp,
    users = [],
  } = business;

  const isActionOpen = activeActionId === id;

  const handleActionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActiveActionId(isActionOpen ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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

export default BusinessRow;
