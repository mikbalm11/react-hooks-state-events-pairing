import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Comments from "./Comments.js";

function App() {
  const [comments, setComments] = useState(true);

  function handleCommentClick() {
    setComments(!comments);
  }

  return (
    <div className="App">
      <Video video={video} comments={comments} onCommentHide={handleCommentClick} />
      {comments ? <Comments comments={video.comments} /> : null}
    </div>
  );
}

export default App;
