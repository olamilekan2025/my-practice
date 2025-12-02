// import React, {useState, useRef, useMemo, useEffect} from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import useFetchAlbum from "../../lib/useFetchAlbum";
// import "./All_albulm.css";

// function All_albums() {
//   const { albums, loading, error } = useFetchAlbum();

//   return (
//     <div className="all-album-container">
//       <h1>All Albums</h1>

//       {error && <p className="error">{error}</p>}

//       <div className="grid">
//         {loading
//           ? Array.from({ length: 20 }).map((_, i) => (
//               <div className="card" key={i}>
//                 <Skeleton height={25} width="80%" />
//                 <Skeleton height={15} width="60%" style={{ marginTop: 10 }} />
//               </div>
//             ))
//           : albums.map((album) => (
//               <div className="cards" key={album.id}>
//                 <h4>{album.title}</h4>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// }

// export default All_albums;


import React, { useState, useRef, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFetchAlbum from "../../lib/useFetchAlbum";
import "./All_albulm.css";

function All_albums() {
  const { albums, loading, error } = useFetchAlbum();

  const [visibleCount, setVisibleCount] = useState(10); // Load first 10 items
  const loadMoreRef = useRef(null);

  // ⚡ Load More Function
  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + 10);
  }, []);

  // ⚡ Intersection Observer for Infinite Scroll
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div className="all-album-container">
      <h1>All Albums</h1>

      {error && <p className="error">{error}</p>}

      <div className="grid">
        {/* Show Skeleton While Loading */}
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <div className="card" key={i}>
                <Skeleton height={25} width="80%" />
                <Skeleton height={15} width="60%" style={{ marginTop: 10 }} />
              </div>
            ))
          : albums.slice(0, visibleCount).map((album) => (
              <div className="cards" key={album.id}>
                <h4>{album.title}</h4>
              </div>
            ))}
      </div>

      {/* SPINNER for loading more */}
      {!loading && visibleCount < albums.length && (
        <div className="spinner-container" ref={loadMoreRef}>
          <div className="spinner"></div>
          <p>Loading more...</p>
        </div>
      )}
    </div>
  );
}

export default All_albums;

