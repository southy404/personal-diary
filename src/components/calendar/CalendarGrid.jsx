const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const isoDate = (d) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const startOfCalendarGrid = (monthDate) => {
  const first = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const day = (first.getDay() + 6) % 7;
  first.setDate(first.getDate() - day);
  return first;
};

const buildDays = (monthDate) => {
  const start = startOfCalendarGrid(monthDate);
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
};

const CalendarGrid = ({ monthDate, entries, onSelectDate, selectedDate }) => {
  const days = buildDays(monthDate);
  const month = monthDate.getMonth();
  const entryDates = new Set(entries.map((e) => e.date));
  const todayIso = isoDate(new Date());

  return (
    <div>
      {/* Weekdays */}
      <div className="grid grid-cols-7 text-xs opacity-70 mb-2">
        {WEEKDAYS.map((w) => (
          <div key={w} className="text-center py-1">
            {w}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => {
          const id = isoDate(d);
          const inMonth = d.getMonth() === month;
          const hasEntry = entryDates.has(id);
          const isSelected = selectedDate === id;
          const isToday = id === todayIso;

          return (
            <button
              key={id}
              onClick={() => onSelectDate(id)}
              className={[
                "calendar-day h-10 rounded-md text-sm relative",
                hasEntry ? "has-entry" : "",
                isSelected ? "selected" : "",
                isToday ? "today" : "",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute top-1 left-1 text-xs",
                  inMonth ? "opacity-90" : "opacity-30",
                ].join(" ")}
              >
                {d.getDate()}
              </span>

              {hasEntry && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2">
                  <span className="calendar-entry-dot" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
