import { useState, useMemo, useCallback, useReducer, useEffect } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import favouritesReducer from "../reducers/favouritesReducer";
import PhotoCard from "./PhotoCard";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState("");

  const [favourites, dispatch] = useReducer(favouritesReducer, [], () => {
    try {
      const saved = localStorage.getItem("favourites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-200 border-t-rose-800"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="rounded-xl bg-red-50 px-6 py-4 text-red-700 ring-1 ring-red-200">
          Something went wrong: {error}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="sticky top-0 z-10 bg-amber-50/90 py-4 backdrop-blur">
        <input
          type="text"
          placeholder="Search by author name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full rounded-full border border-amber-300 bg-white px-5 py-3 shadow-sm outline-none transition focus:border-rose-700 focus:ring-2 focus:ring-rose-200"
        />
      </div>

      {filteredPhotos.length === 0 ? (
        <p className="py-16 text-center text-rose-900/60">No photos found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggle={() =>
                dispatch({ type: "TOGGLE_FAVOURITE", id: photo.id })
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;