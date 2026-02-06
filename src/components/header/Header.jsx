import { useEffect, useState } from "react";
import AddEntryButton from "./AddEntryButton";

const Header = ({ onAddClick, sortMode, onSortChange }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Personal Diary</h1>
        <p className="text-sm opacity-70">
          {now.toLocaleDateString("de-DE", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {now.toLocaleTimeString("de-DE")}
        </p>
      </div>
      {/* Sort-Dropdown */}
      <div className="flex items-center gap-3">
        <select
          className="select select-bordered select-sm"
          value={sortMode}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="date-desc">Newest first</option>
          <option value="date-asc">Oldest first</option>
          <option value="title-asc">Title A–Z</option>
        </select>

        <AddEntryButton onClick={onAddClick} />
      </div>
    </header>
  );
};

export default Header;
