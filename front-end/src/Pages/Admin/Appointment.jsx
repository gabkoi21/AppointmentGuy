import { useEffect } from "react";
import DataTable from "../../components/Global/Common/DataTable";
import GlobalSearchBar from "../../components/Global/Common/GlobalSearchBar";
import { Appointmentcolumns } from "../../components/Admin/Dashboard/AppointmentColumns";
import useUserStore from "../../stores/userStore";
import useAppointmentStore from "../../stores/appointmentStore";
import useBusinessStore from "../../stores/businessStore";
import useServiceStore from "../../stores/serviceStore";
import AppointmentRow from "../../components/Admin/Dashboard/AppointmentRow";

const ApppintmentContainer = () => (
  <div className="flex">
    <aside className="h-screen md);

const AppointmentTable = () => {
  const { appointments, fetchAppointment } = useAppointmentStore();
  const { users, fetchUser } = useUserStore();
  const { businesses, fetchBusinesses } = useBusinessStore();
  const { fetchServices, services } = useServiceStore();

  // Fetching the data when the component mounts
  useEffect(() => {
    fetchAppointment();
    fetchUser();
    fetchBusinesses();
    fetchServices();
  }, [fetchAppointment, fetchUser, fetchBusinesses, fetchServices]);

  return (
    <div className="mt-5 w-full overflow-x-auto">
      <div className="min-w-[700px]"></div>
      <DataTable
        columns={Appointmentcolumns}
        data={appointments}
        renderRow={(appointment) => (
          <AppointmentRow
            key={appointment.timestamp}
            appointment={appointment}
            users={users}
            businesses={businesses}
            services={services}
          />
        )}
      />
    </div>
  );
};

export default ApppintmentContainer;
