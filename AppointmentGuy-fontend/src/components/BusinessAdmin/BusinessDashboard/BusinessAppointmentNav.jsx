import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";

const BusinessAppointmentNav = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-gray-100 py-5 px-5 rounded-sm shadow-sm">
          <TabsTrigger value="allappointment">All Appointment</TabsTrigger>
          <TabsTrigger value="calendarview">Calendar View</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};

export default BusinessAppointmentNav;
