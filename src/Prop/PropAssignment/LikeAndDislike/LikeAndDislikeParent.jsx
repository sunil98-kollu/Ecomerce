import React, { useState } from 'react'
import LikeAndDislike from './LikeAndDislike';
export default function LikeAndDislikeParent() {
  const[likeCount,setLikeCount]=useState(0);
    const[dislikeCount,setDisLikeCount]=useState(0);

    const handleLike=()=>{
setLikeCount(likeCount+1);
    }
  const handleDislike=()=>{
setDisLikeCount(dislikeCount+1)
  }
  return (
   <div style={{ padding: "20px" }}>
      <h2>Like / Dislike System</h2>

      <LikeAndDislike
        likeCount={likeCount}
        dislikeCount={dislikeCount}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </div>
  )
}
