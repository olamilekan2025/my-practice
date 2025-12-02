import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import useFetchAlbum from "../../lib/useFetchAlbum";
import useFetchPost from "../../lib/useFetchPost";
import useFetchComment from "../../lib/useFetchComment";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();
  
  const { albums, loading: albumsLoading, error: albumsError } = useFetchAlbum();
  const { posts, loading: postsLoading, error: postsError } = useFetchPost();
  const { comments, loading: commentsLoading, error: commentsError } = useFetchComment();

  return (
    <div className="menu-container">
      
      {/* ALBUMS */}
      <h2 className="section-title">Albums</h2>
      {albumsError && <p className="error">{albumsError}</p>}

      <div className="grid">
        {albumsLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div className="card" key={i}>
                <Skeleton height={25} width="80%" />
                <Skeleton height={15} width="60%" style={{ marginTop: 10 }} />
              </div>
            ))
          : albums.slice(0, 5).map((album) => (
              <div className="cards" key={album.id}>
                <h4>{album.title}</h4>
              </div>
            ))}
      </div>

      {/* ALBUM VIEW MORE */}
      {!albumsLoading && (
        <button className="view-more-btn" onClick={() => navigate("/all_albums")}>
          View More →
        </button>
      )}

      {/* POSTS */}
      <h2 className="section-title">Posts</h2>
      {postsError && <p className="error">{postsError}</p>}

      <div className="grid">
        {postsLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div className="card" key={i}>
                <Skeleton height={25} width="80%" />
                <Skeleton height={15} width="90%" style={{ marginTop: 10 }} />
                <Skeleton height={15} width="70%" style={{ marginTop: 10 }} />
              </div>
            ))
          : posts.slice(0, 4).map((post) => (
              <div className="cards" key={post.id}>
                <div className="images">
                  <img
                    src="https://res.cloudinary.com/divio4grm/image/upload/v1764583365/store_rdktax.jpg"
                    alt="post"
                  />
                </div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            ))}
      </div>

      {/* POST VIEW MORE */}
      {!postsLoading && (
        <button className="view-more-btn" onClick={() => navigate("/all_posts")}>
          View More →
        </button>
      )}

      {/* COMMENTS */}
      <h2 className="section-title">💬 Comments</h2>
      {commentsError && <p className="error">{commentsError}</p>}

      <div className="grid">
        {commentsLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div className="card" key={i}>
                <Skeleton height={20} />
                <Skeleton height={15} style={{ marginTop: 10 }} />
              </div>
            ))
          : comments.slice(0, 4).map((comment) => (
              <div className="card" key={comment.id}>
                <h4>{comment.email}</h4>
                <p>{comment.body}</p>
              </div>
            ))}
      </div>

      {/* COMMENT VIEW MORE */}
      {!commentsLoading && (
        <button className="view-more-btn" onClick={() => navigate("/all_comments")}>
          View More →
        </button>
      )}
    </div>
  );
}

export default Menu;
