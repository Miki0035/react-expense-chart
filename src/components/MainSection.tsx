import Chart from "./Chart";

const MainSection = () => {
  return (
    <section className="w-80 sm:w-96">
      <div className="bg-veryPaleOrange flex flex-col rounded-xl py-5 px-4 ">
        <h2 className="text-arkBrown font-dmBold  text-2xl">
          Spending - Last 7 days
        </h2>
        <Chart />
        <div className="w-full flex justify-between items-center py-5 px-3">
          <div className="flex flex-col">
            <h3 className="text-lg text-mediumBrown sm:text-xl">Total this month</h3>
            <p className="text-3xl text-arkBrown font-dmBold sm:text-4xl">$478.33</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-arkBrown font-dmBold text-md sm:text-xl">+2.4%</p>
            <p className="text-sm text-mediumBrown sm:text-md">from last month</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
