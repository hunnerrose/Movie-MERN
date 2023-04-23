import React, { useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleDelete = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => handleDelete(index)}>Delete Comment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
