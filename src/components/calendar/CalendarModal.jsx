import CalendarGrid from "./CalendarGrid";

const CalendarModal = ({
  isOpen,
  onClose,
  monthDate,
  onPrevMonth,
  onNextMonth,
  entries,
  onSelectDate,
  selectedDate,
}) => {
  if (!isOpen) return null;

  const monthLabel = monthDate.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-md bg-neutral text-neutral-content border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg capitalize">{monthLabel}</h3>

          <div className="flex gap-2">
            <button className="btn btn-ghost btn-sm" onClick={onPrevMonth}>
              ‹
            </button>
            <button className="btn btn-ghost btn-sm" onClick={onNextMonth}>
              ›
            </button>
            <button className="btn btn-ghost btn-sm" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        <CalendarGrid
          monthDate={monthDate}
          entries={entries}
          onSelectDate={onSelectDate}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
};

export default CalendarModal;
