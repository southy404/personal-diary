import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import EntryList from "./components/entries/EntryList";
import AddEntryModal from "./components/modals/AddEntryModal";
import ViewEntryModal from "./components/modals/ViewEntryModal";

const App = () => {
  // localStorage
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem("personal-diary-entries");
    return storedEntries ? JSON.parse(storedEntries) : [];
  });

  // useEffect Sync
  useEffect(() => {
    localStorage.setItem("personal-diary-entries", JSON.stringify(entries));
  }, [entries]);

  // Edit Entry
  const [entryToEdit, setEntryToEdit] = useState(null);
  const handleEditEntry = (updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );

    setEntryToEdit(null);
    setIsAddModalOpen(false);
  };

  // Sort Entries
  const [sortMode, setSortMode] = useState("date-desc");
  const sortedEntries = [...entries].sort((a, b) => {
    if (sortMode === "date-desc") {
      return new Date(b.date) - new Date(a.date);
    }

    if (sortMode === "date-asc") {
      return new Date(a.date) - new Date(b.date);
    }

    if (sortMode === "title-asc") {
      return a.title.localeCompare(b.title, "de");
    }

    return 0;
  });

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleAddEntry = (newEntry) => {
    const entryExistsForDay = entries.some(
      (entry) => entry.date === newEntry.date
    );

    if (entryExistsForDay) {
      alert("You already created an entry for this day. Come back tomorrow!");
      return;
    }

    setEntries((prevEntries) => [newEntry, ...prevEntries]);
    setIsAddModalOpen(false);
  };

  const handleDeleteEntry = (id) => {
    const confirmed = confirm("Do you really want to delete this entry?");

    if (!confirmed) return;

    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));

    setSelectedEntry(null);
    setIsViewModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <Header
        onAddClick={() => setIsAddModalOpen(true)}
        sortMode={sortMode}
        onSortChange={setSortMode}
      />

      <EntryList
        entries={sortedEntries}
        onSelectEntry={(entry) => {
          setSelectedEntry(entry);
          setIsViewModalOpen(true);
        }}
      />

      {isAddModalOpen && (
        <AddEntryModal
          onClose={() => {
            setIsAddModalOpen(false);
            setEntryToEdit(null);
          }}
          onAddEntry={entryToEdit ? handleEditEntry : handleAddEntry}
          entryToEdit={entryToEdit}
        />
      )}

      {isViewModalOpen && selectedEntry && (
        <ViewEntryModal
          entry={selectedEntry}
          onClose={() => {
            setSelectedEntry(null);
            setIsViewModalOpen(false);
          }}
          onDelete={handleDeleteEntry}
          onEdit={(entry) => {
            setEntryToEdit(entry);
            setIsViewModalOpen(false);
            setIsAddModalOpen(true);
          }}
        />
      )}
    </div>
  );
};

export default App;
