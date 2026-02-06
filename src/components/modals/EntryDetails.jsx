const PLACEHOLDER_IMG = "https://placehold.co/1200x800?text=No+Image";

const EntryDetails = ({ entry }) => {
  const imgSrc = entry.imageUrl?.trim() ? entry.imageUrl : PLACEHOLDER_IMG;

  return (
    <div className="space-y-4">
      <img
        src={imgSrc}
        alt={entry.title}
        className="w-full h-64 object-cover rounded"
        onError={(e) => {
          e.currentTarget.src = PLACEHOLDER_IMG;
        }}
      />

      <div>
        <p className="text-sm opacity-60">
          {new Date(entry.date).toLocaleDateString("de-DE", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 className="text-2xl font-bold">{entry.title}</h2>
      </div>

      <p className="leading-relaxed">{entry.content}</p>
    </div>
  );
};

export default EntryDetails;
