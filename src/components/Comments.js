import React, { useState } from "react";
import Comment from "./Comment";
import { Dropdown } from 'semantic-ui-react';

function Comments({ comments }) {
  const [search, setSearchField] = useState("");
  const [removeComments, setComments] = useState(comments);
  const [sortOption, setSortOption] = useState('');

  function handleSearch(event) {
    setSearchField(event.target.value);
  }

  function handleRemoveComment(id) {
    const updatedComments = removeComments.filter(comment => comment.id !== id);
    setComments(updatedComments);
  }

  function handleSortChange(event, { value }) {
    setSortOption(value);
  }

  const getSortedComments = (removeComments) => {
    switch (sortOption) {
      case 'upvotes':
        return [...removeComments].sort((a, b) => b.upvotes - a.upvotes);
      default:
        return removeComments;
    }
  };

  const sortedComments = getSortedComments(removeComments);

  const filteredComments = sortedComments.filter(comment => {
    return (
      comment
        .user
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      comment
        .comment
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  })

  const sortOptions = [
    { key: 'upvotes', text: 'Upvotes', value: 'upvotes' },
  ];

  const allComments = filteredComments.map(comment => (
    <Comment key={comment.id}
      id={comment.id}
      user={comment.user}
      comment={comment.comment}
      upvotes={0}
      downvotes={0}
      onRemove={handleRemoveComment}
    />))

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Dropdown
          placeholder='Sort by'
          selection
          options={sortOptions}
          onChange={handleSortChange}
          value={sortOption}
        />
      </div>
      <h2>{allComments.length} Comments</h2>
      <input
        type="search"
        placeholder="Search users or comments"
        onChange={handleSearch}
      />
      {allComments}
    </div>
  );
}

export default Comments;
