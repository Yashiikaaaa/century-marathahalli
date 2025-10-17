import React from 'react';
import image from '../assets/home/overviewembassy.png';
import Button from '../components/button/buttonMain';
import { useLeadTracking, LEAD_SOURCES } from '../hooks/useLeadTracking';

// Overview Component
export const Overview = ({ openContactModal }) => {
  const { trackButtonClick } = useLeadTracking();
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
        
Century Marathahalli: The Most Awaited Launch in East Bangalore
         </span>
          <br />
          
            <span>
        <br />    <p> This project offers an unbeatable location in Marathahalli, East Bangalore with seamless connectivity to Outer Ring Road, Whitefield, Bellandur, and major IT hubs. It’s surrounded by top schools, shopping avenues, and lifestyle destinations, ensuring a convenient yet upscale urban living experience.
<p/>
            <br/>
            <p>Spanning 15 acres, the development features a mixed-use layout with 10 acres of premium residences and 5 acres of commercial space. Phase 1 includes 450 spacious apartments out of a total of 850 units, spread across 5 iconic towers (G + 15 / 16 floors). Home sizes range from 1600 – 2200 sqft, with 3 and 4 BHK options available. Backed by the trusted Century Estates brand, this project assures quality, design excellence, and long-term value. </p></p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  trackButtonClick(LEAD_SOURCES.OVERVIEW, 'enquire_now', 'Overview Section CTA');
                  openContactModal(LEAD_SOURCES.OVERVIEW);
                }}
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Autumn Leaves"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
