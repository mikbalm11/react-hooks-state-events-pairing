import React, { useState } from "react";

function Comment({ id, user, comment, upvotes, downvotes, onRemove }) {
    const [localUpvote, setUpvotes] = useState(upvotes);
    const [localDownvote, setDownvotes] = useState(downvotes);

    function handleCommentVoteClick(voteType) {
        switch (voteType) {
            case "Upvote":
                setUpvotes(localUpvote + 1);
                break;
            case "Downvote":
                setDownvotes(localDownvote + 1);
                break;
            default:
                return;
        }
    }

    function handleRemoveClick() {
        onRemove(id);
      }

    return (
        <div>
            <h2>{user}</h2>
            <p>{comment}
                <button onClick={() => handleCommentVoteClick("Upvote")}>{localUpvote} 👍</button>
                <button onClick={() => handleCommentVoteClick("Downvote")}>{localDownvote} 👎</button>
            </p>
            <button onClick={handleRemoveClick}>Remove Comment</button>
        </div>
    );
}

export default Comment;
