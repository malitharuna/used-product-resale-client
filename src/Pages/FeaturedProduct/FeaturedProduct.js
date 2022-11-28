import React from 'react';
import vectorimage from '../../assets/images/images.png';
import img1 from '../../assets/images/Yamaha-Logo.png';
import img2 from '../../assets/images/Bajaj-Logo.png';
import img3 from '../../assets/images/Logo-Honda.png';
import img4 from '../../assets/images/Hero-honda.png';



const FeaturedProduct = () => {

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-red-400">
            New Posted
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <img className='w-40' src={vectorimage} alt="" />
            {/* <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="27df4f81-c854-45de-942a-fe90f7a300f9"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                      width="52"
                      height="24"
                    />
                  </svg> */}
            <span className="relative">****  ****</span>
          </span>{''}
          You Can See Here Now New Posted and Wiki about MotorCycle
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          The six main types of motorcycles are generally recognized as standard, cruiser, touring, sports, off-road, and dual-purpose.Sport touring is sometimes recognized as a seventh category or integrated with the touring category.
         
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <img src={img1} alt="" />
              {/* <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg> */}
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">The Sports Motor</h6>
            <p className="mb-3 text-sm text-gray-900">
              Sport bikes are road bikes which emphasize top speed, acceleration, braking, handling and grip, typically at the expense of comfort and fuel economy in comparison to other motorcycle types. Sport bikes have comparatively high performance engines supported within a lightweight frame.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <img src={img2} alt="" />
              {/* <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg> */}
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Cruiser MotorCycle
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Cruiser motorcycles (or simply cruisers) are styled after American motorcycles from the 1930s to the early 1960s, such as those made by Harley-Davidson, Indian, and Excelsior-Henderson. Harley-Davidsons largely define the cruiser category, and large-displacement V-twin engines are the norm,
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <img src={img3} alt="" />
              {/* <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg> */}
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Sport-Touring Motorcycle
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              A BMW R1100RS sport-touring motorcycle
              Sport touring motorcycles combine attributes of sport bikes and touring motorcycles. The rider posture is less extreme than a sport bike, giving greater long-distance comfort.Accommodation for a passenger is superior to a sport bike as well.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <img src={img4} alt="" />
              {/* <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg> */}
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Off-Road Motorcycles
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Off-road motorcycles, also known as dirt bikes or scramblers, specially designed for off-road use. The term off-road refers to driving surfaces that are not conventionally paved. These are rough surfaces, often created naturally, such as sand, gravel, a river, mud or snow.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );

};

export default FeaturedProduct;