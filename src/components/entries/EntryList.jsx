import EntryCard from "./EntryCard";

const EntryList = ({ entries, onSelectEntry }) => {
  if (!entries.length) {
    return (
      <p className="text-center opacity-60 mt-10">No diary entries yet.</p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onClick={() => onSelectEntry(entry)}
        />
      ))}
    </div>
  );
};

export default EntryList;
