import React from "react";
import useFetchPhotos from "../../lib/useFetchPhotos";
import "./Fetch.css"; // Optional CSS for styling

function Photos() {
  const { photos, loading, error } = useFetchPhotos();

  if (loading) return <p>Loading photos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Photos;

