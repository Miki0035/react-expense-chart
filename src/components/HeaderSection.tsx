
const HeaderSection = () => {
  return (
    <section className="w-80 sm:w-96">
      <div className="flex py-5 px-4 w-full justify-between items-center bg-softRed rounded-xl mb-5 ">
        <div className="flex flex-col">
          <h1 className="text-sm text-veryPaleOrange text-cyan">My balance</h1>
          <p className="text-xl text-veryPaleOrange font-dmBold sm:text-2xl ">$921.48</p>
        </div>
        <div className="relative flex flex-row">
          <div className="absolute -top-4 right-10 z-10 border border-veryPaleOrange rounded-full w-8 h-8 sm:w-10 sm:h-10"></div>
          <div className="absolute -top-4 right-5 bg-arkBrown rounded-full w-8 h-8 sm:w-10 sm:h-10"></div>

        </div>
      </div>

    </section>
  )
}

export default HeaderSection