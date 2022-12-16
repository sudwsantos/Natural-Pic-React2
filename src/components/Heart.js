import React from 'react'
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useState } from 'react';

const Heart = () => {
  
  
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    liked == true ? setLiked(false) : setLiked(true)
  }

  return (
    <div onClick={handleClick}>
      {liked == true ? (
        <BsHeartFill className="heart" />
      ) : (
        <BsHeart className="heart" />
      )}
    </div>
  );
}

export default Heart