import data from "../constants/data.json";

const Chart = () => {
  return (
    <div className="w-full h-full mt-5 flex flex-col  items-center">
      <div className="w-72 sm:w-full flex justify-evenly items-center  h-[180px] sm:h-[200px]  border-b-2 border-cream pb-4">
        {data.map((data, index) => (
          <div
            key={index}
            className="relative w-full flex flex-col items-center h-full"
          >
            <div
              style={{ height: `${Math.floor(data.amount * 2.5)}px` }}
              className={` absolute bottom-4 w-[30px] sm:w-[38px]  bg-${data.color} mb-2 rounded-md `}
            ></div>
            <p className="text-xs sm:text-sm text-mediumBrown absolute bottom-1">
              {data.day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
