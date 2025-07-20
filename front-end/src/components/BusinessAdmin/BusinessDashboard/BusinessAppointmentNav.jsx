import { Tabs, TabsList, TabsTrigger } from "@/components/Global/ui/tabs";

const BusinessAppointmentNav = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="rounded-sm bg-gray-100 px-5 py-5 shadow-sm">
          <TabsTrigger value="allappointment">All Appointment</TabsTrigger>
          <TabsTrigger value="calendarview">Calendar View</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};

export default BusinessAppointmentNav;
