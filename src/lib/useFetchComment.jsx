// import { useState, useEffect } from "react";

// function useFetchComments() {
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//       .then((res) => {
//         if (!res.ok) throw new Error("Error fetching comments");
//         return res.json();
//       })
//       .then((data) => {
//         setComments(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   return { comments, loading, error };
// }

// export default useFetchComments;



import { useQuery } from "@tanstack/react-query";

const fetchComments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
};

export default function useFetchComment() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
    staleTime: 1000 * 60 * 5,
  });

  return {
    comments: data || [],
    loading: isLoading,
    error: error ? error.message : null,
  };
}

