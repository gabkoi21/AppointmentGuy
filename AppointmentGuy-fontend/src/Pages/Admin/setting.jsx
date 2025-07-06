const SettingContainer = () => (
  <div className="flex">
    <aside className="h-screen md:w-[16%]"></aside>
    <main className="mx-3 mt-20 w-full px-3 md:w-[84%]">
      <Settings />
    </main>
  </div>
);

export default SettingContainer;

const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="ml-20 mt-10 flex flex-col">
        <h1 className="text-xl font-semibold">This is for the settings</h1>
        <p className="text-gray-500">
          You can manage your account settings here.
        </p>
      </div>
    </div>
  );
};
