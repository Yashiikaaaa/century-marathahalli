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
        <br />    <p>Century Marathahalli is an exclusive 15-acre integrated township located right opposite Sankara Eye Hospital, Marathahalli. With launch pricing starting at ₹15,750 per sq. ft. (all inclusive) for the first 100 buyers, it offers premium 2, 2.5, 3, and 4 BHK homes thoughtfully designed to blend comfort and elegance.<p/>
            <br/>
            <p>The project features 10 acres of residential development and 5 acres dedicated to commercial spaces, creating a self-sustained community where you can live, work, and unwind. Its prime location ensures easy connectivity to Outer Ring Road, Whitefield, and Bellandur, making it ideal for professionals and families alike. </p></p>

            

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
