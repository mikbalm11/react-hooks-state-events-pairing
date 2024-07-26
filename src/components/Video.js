import React, {useState} from "react";

function Video({ video, comments, onCommentHide }) {
    const [upvotes, setUpvotes] = useState(video.upvotes);
    const [downvotes, setDownvotes] = useState(video.downvotes);

    function handleVoteClick(voteType) {
        switch (voteType) {
            case "Upvote":
                setUpvotes(upvotes+1);
                break;
            case "Downvote":
                setDownvotes(downvotes+1);
                break;
            default:
                return;
        }
    }

    return (
        <div>
            <iframe id={video.id}
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <span>{video.views} Views | {video.createdAt}</span>
            <div>
                <button onClick={() => handleVoteClick("Upvote")}>{upvotes} 👍</button>
                {" "}
                <button onClick={() => handleVoteClick("Downvote")}>{downvotes} 👎</button>
            </div>
            <div>
                <button onClick={onCommentHide}>{comments ? "Hide Comments": "Show Comments"}</button>
            </div>
        </div>
    );
}

export default Video;
