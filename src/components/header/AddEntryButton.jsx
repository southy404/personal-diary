const AddEntryButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      + Add
    </button>
  );
};

export default AddEntryButton;
