import React, { useState, useRef, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFetchComment from "../../lib/useFetchComment";
import "./All_comments.css";

function All_comments() {
  const { comments, loading, error } = useFetchComment();
  const [visibleCount, setVisibleCount] = useState(20);
  const fetchMoreRef = useRef(null);

  const fetchMore = useCallback(() => {
    setVisibleCount((prev) => prev + 10);
  }, []);

  useEffect(() => {
    if (!fetchMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMore();
        }
      },
      { threshold: 1 }
    );

    observer.observe(fetchMoreRef.current);

    return () => observer.disconnect();
  }, [fetchMore]);

  return (
    <div className="all-comments-container">
      <h1>All Comments</h1>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <div className="grid">
          {Array.from({ length: 20 }).map((_, i) => (
            <div className="comment-card" key={i}>
              <Skeleton height={20} width="80%" />
              <Skeleton height={15} width="90%" style={{ marginTop: 10 }} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid">
            {comments.slice(0, visibleCount).map((comment) => (
              <div className="comment-card" key={comment.id}>
                <h4>{comment.email}</h4>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>

          {/* Spinner trigger */}
          {visibleCount < comments.length && (
            <div className="spinner-container" ref={fetchMoreRef}>
              <div className="spinner"></div>
              <p>Loading more...</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default All_comments;
