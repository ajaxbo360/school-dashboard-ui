import Announcements from "@/components/Announcment";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
const ParentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/*Left  */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule | (Mike Miler)</h1>
          <BigCalendar />
        </div>
      </div>
      {/*Right  */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
