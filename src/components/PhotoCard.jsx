function PhotoCard({ photo, isFavourite, onToggle }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-amber-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/id/${photo.id}/400/300`}
          alt={`Photo by ${photo.author}`}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          onClick={onToggle}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl shadow transition hover:scale-110 active:scale-95"
        >
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="border-t border-amber-100 p-4">
        <p className="text-xs uppercase tracking-widest text-amber-600">
          Photo by
        </p>
        <p className="mt-1 font-serif text-lg text-rose-900">{photo.author}</p>
      </div>
    </div>
  );
}

export default PhotoCard;