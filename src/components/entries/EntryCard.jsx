const PLACEHOLDER_IMG = "https://placehold.co/600x400?text=No+Image";
const EntryCard = ({ entry, onClick }) => {
  const imgSrc = entry.imageUrl?.trim() ? entry.imageUrl : PLACEHOLDER_IMG;

  return (
    <div
      onClick={onClick}
      className="card bg-base-100 shadow-md cursor-pointer hover:shadow-xl transition"
    >
      <figure>
        <img
          src={imgSrc}
          alt={entry.title}
          className="h-40 w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMG;
          }}
        />
      </figure>

      <div className="card-body">
        <p className="text-sm opacity-60">
          {new Date(entry.date).toLocaleDateString("de-DE", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 className="card-title">{entry.title}</h2>
      </div>
    </div>
  );
};

export default EntryCard;
