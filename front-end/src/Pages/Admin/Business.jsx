// Main Container Component
const BusinessContainer = () => (
  <div className="flex">
    <aside className="h-screen md:w-[20%] lg:w-[23%]" />
    <main className="mx-3 mt-14 w-full px-3 md:w-[98%]">
      <Business />
    </main>
  </div>
);

export default BusinessContainer;

const Business = () => {
  return (
    <div className="ml-20 mt-10 flex flex-col">
      <h1 className="text-xl font-bold">Business</h1>
      <p className="text-gray-500">
        You can manage your business settings here.
      </p>
    </div>
  );
};
