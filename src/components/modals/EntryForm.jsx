import { useState } from "react";

const EntryForm = ({ onSubmit, entryToEdit, initialDate }) => {
  const [title, setTitle] = useState(entryToEdit?.title || "");
  const [date, setDate] = useState(entryToEdit?.date || initialDate || "");
  const [imageUrl, setImageUrl] = useState(entryToEdit?.imageUrl || "");
  const [content, setContent] = useState(entryToEdit?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !content) {
      alert("Please fill out all fields.");
      return;
    }

    const updatedEntry = {
      id: entryToEdit?.id || crypto.randomUUID(),
      title,
      date,
      imageUrl,
      content,
    };

    onSubmit(updatedEntry);

    setTitle("");
    setDate("");
    setImageUrl("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        className="input input-bordered w-full"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="url"
        placeholder="Image URL"
        className="input input-bordered w-full"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <textarea
        placeholder="Your diary entry..."
        className="textarea textarea-bordered w-full"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <button type="submit" className="btn btn-primary w-full">
        Save
      </button>
    </form>
  );
};

export default EntryForm;
