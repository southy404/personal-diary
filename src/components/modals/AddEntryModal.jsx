import EntryForm from "./EntryForm";

const AddEntryModal = ({ onClose, onAddEntry, entryToEdit }) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="text-lg font-bold mb-4">
          {entryToEdit ? "Edit Entry" : "Add New Entry"}
        </h2>
        <EntryForm onSubmit={onAddEntry} entryToEdit={entryToEdit} />
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEntryModal;
