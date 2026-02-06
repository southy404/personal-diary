const CalendarButton = ({ onClick }) => {
  return (
    <button className="btn btn-outline btn-sm" onClick={onClick}>
      📅 Calendar
    </button>
  );
};

export default CalendarButton;
