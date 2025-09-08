const announcements = [
  {
    id: 1,
    title: "Semester Break Announcement",
    date: "2025-01-01",
    description:
      "The school will remain closed from Jan 10 - Jan 20 for the winter break.",
    bg: "bg-lamaSkyLight",
  },
  {
    id: 2,
    title: "Exam Schedule Released",
    date: "2025-02-15",
    description:
      "Midterm exam timetable has been published. Check the exams section for details.",
    bg: "bg-lamaPurpleLight",
  },
  {
    id: 3,
    title: "New Library Books Added",
    date: "2025-03-05",
    description:
      "Over 200 new titles have been added to the library. Students are encouraged to explore.",
    bg: "bg-lamaYellowLight",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-700">📢 Announcements</h1>
        <span className="text-xs text-blue-500 hover:underline cursor-pointer">
          View All
        </span>
      </div>

      {/* Announcements List */}
      <div className="flex flex-col gap-4 mt-5">
        {announcements.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} rounded-xl p-4 shadow-sm hover:shadow-md transition`}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-800">{item.title}</h2>
              <span className="text-xs text-gray-500 bg-white rounded-md px-2 py-0.5 shadow-sm">
                {item.date}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
