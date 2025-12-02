// import { useState, useEffect } from "react";


// function useFetchAlbums() {
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((data) => {
//         setAlbums(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   return { albums, loading, error };
// }

// export default useFetchAlbums;

import { useQuery } from "@tanstack/react-query";

const fetchAlbums = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!res.ok) throw new Error("Failed to fetch albums");
  return res.json();
};

export default function useFetchAlbum() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

  return {
    albums: data || [],
    loading: isLoading,
    error: error ? error.message : null,
  };
}

