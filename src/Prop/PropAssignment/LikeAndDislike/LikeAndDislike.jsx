import React from 'react'

export default function LikeAndDislike({likeCount,dislikeCount,onLike,onDislike})
 {
  
    return (
   <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
      <button
        onClick={onLike}
        style={{
          padding: "10px 16px",
          backgroundColor: "#459c48",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        👍 Like {likeCount}
      </button>

      <button
        onClick={onDislike}
        style={{
          padding: "10px 16px",
          backgroundColor: "#630b05",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        👎 Dislike {dislikeCount}
      </button>
    </div>
  )
}
