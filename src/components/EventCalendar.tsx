"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Staff Meeting",
    time: "09:00 AM - 10:30 AM",
    description:
      "Weekly staff meeting to review academic performance and upcoming events.",
  },
  {
    id: 2,
    title: "Midterm Exam - Grade 10",
    time: "11:00 AM - 01:00 PM",
    description: "Mathematics midterm exam scheduled in Hall A.",
  },
  {
    id: 3,
    title: "Parent-Teacher Conference",
    time: "02:00 PM - 05:00 PM",
    description: "Parents meet with teachers to discuss student progress.",
  },
  {
    id: 4,
    title: "School Sports Day",
    time: "09:00 AM - 04:00 PM",
    description:
      "Annual sports competition for all grades at the school stadium.",
  },
  {
    id: 5,
    title: "Submission Deadline",
    time: "11:59 PM",
    description:
      "Final date to submit student attendance and grade reports for this term.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      {/* Calendar */}
      <Calendar
        onChange={onChange}
        value={value}
        className="rounded-lg border border-gray-200 p-3 shadow-sm"
      />

      {/* Header */}
      <div className="flex items-center justify-between mt-6 mb-4">
        <h1 className="text-lg font-bold text-gray-700">📅 Upcoming Events</h1>
        <Image
          src="/moreDark.png"
          alt="More options"
          width={22}
          height={22}
          className="cursor-pointer hover:opacity-70"
        />
      </div>

      {/* Events */}
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-xl border border-gray-100 bg-gradient-to-r from-gray-50 to-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-800">{event.title}</h2>
              <span className="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-1 rounded-md">
                {event.time}
              </span>
            </div>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
