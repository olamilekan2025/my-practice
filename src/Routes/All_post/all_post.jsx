import React, { useState, useEffect, useRef, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFetchPost from "../../lib/useFetchPost";
import "./All_Post.css";

function All_post() {
  const { posts, loading, error } = useFetchPost();

  const [visibleCount, setVisibleCount] = useState(10);
  const loadMoreRef = useRef(null);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + 10);
  }, []);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 1 }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div className="all-posts-container">
      <h1>All Posts</h1>

      {error && <p className="error">{error}</p>}

      <div className="grid">
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <div className="post-card" key={i}>
                <Skeleton height={25} width="80%" />
                <Skeleton height={15} width="90%" style={{ marginTop: 10 }} />
                <Skeleton height={15} width="70%" style={{ marginTop: 10 }} />
              </div>
            ))
          : posts.slice(0, visibleCount).map((post) => (
              <div className="post-card" key={post.id}>
                <img
                  src="https://res.cloudinary.com/divio4grm/image/upload/v1764583365/store_rdktax.jpg"
                  alt="post"
                  className="post-img"
                />
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            ))}
      </div>

      {/* Infinite scroll section */}
      {!loading && visibleCount < posts.length && (
        <div className="spinner-container" ref={loadMoreRef}>
          <div className="spinner"></div>
          <p>Loading more...</p>
        </div>
      )}
    </div>
  );
}

export default All_post;
