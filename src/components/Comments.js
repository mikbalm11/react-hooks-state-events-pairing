import React from "react";

function Comments({ comments }) {
    const allComments = comments.map(comment => (
    <div key={comment.id}>
        <h2>{comment.user}</h2>
        <p>{comment.comment}</p>
    </div>))

  return (
    <div>
        <h2>{allComments.length} Comments</h2>
        {allComments}
    </div>
  );
}

export default Comments;
