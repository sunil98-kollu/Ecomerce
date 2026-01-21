import React, { useState } from "react";
export default function ProductRating() {

  const [rating, setRating] = useState(0); // set rating initial value 0 
  const numbers=[1,2,3,4,5]
  return (
    <div>
      <div>
        {numbers.map((star) => (    //loop to the array  
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              fontSize: "60px",
              cursor: "pointer",
              color: star <= rating ? "green" : "gray"   // star greater than rating  showing green 
            }}
          >
            *
          </span>
        ))}
      </div>
      <p>Selected Rating: {rating}</p>  
    </div>
  );
}
