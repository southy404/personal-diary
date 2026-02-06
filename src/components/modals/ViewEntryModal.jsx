import EntryDetails from "./EntryDetails";

const ViewEntryModal = ({ entry, onClose, onDelete, onEdit }) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-3xl">
        <EntryDetails entry={entry} />

        <div className="modal-action justify-between">
          <div className="flex gap-2">
            <button className="btn btn-outline" onClick={() => onEdit(entry)}>
              Edit
            </button>

            <button
              className="btn btn-error"
              onClick={() => onDelete(entry.id)}
            >
              Delete
            </button>
          </div>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEntryModal;
