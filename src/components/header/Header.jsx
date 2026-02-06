import { useEffect, useState } from "react";
import AddEntryButton from "./AddEntryButton";
import CalendarButton from "../calendar/CalendarButton";

const Header = ({ onAddClick, onOpenCalendar, sortMode, onSortChange }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mb-6 space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Personal Diary
          </h1>
          <p className="text-xs sm:text-sm opacity-70 leading-tight">
            {now.toLocaleDateString("de-DE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {now.toLocaleTimeString("de-DE")}
          </p>
        </div>

        {/* Add Button */}
        <AddEntryButton onClick={onAddClick} />
      </div>

      {/* Calendar + Sort */}
      <div className="flex items-center gap-2 sm:justify-start">
        <CalendarButton onClick={onOpenCalendar} />

        <select
          className="select select-bordered select-sm"
          value={sortMode}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="date-desc">Newest first</option>
          <option value="date-asc">Oldest first</option>
          <option value="title-asc">Title A–Z</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
