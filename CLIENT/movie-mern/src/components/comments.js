// import React, { useState } from "react";

// function Comments() {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   const handleSubmit = (e) => {
//     fetch.post
//     e.preventDefault();
//     setComments([...comments, newComment]);
//     setNewComment("");
//   };

//   const handleDelete = (index) => {
//     const newComments = [...comments];
//     newComments.splice(index, 1);
//     setComments(newComments);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         />
//         <button type="submit">Add Comment</button>
//       </form>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>
//             {comment}
//             <button onClick={() => handleDelete(index)}>Delete Comment</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Comments;

import React, { useState, useEffect } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const API_BASE = "https://rqygsodbcvrutuezcjts.supabase.co/";

  useEffect(() => {
    fetch(API_BASE)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: newComment }),
      });
      if (!response.ok) {
        throw new Error("Failed to add comment.");
      }
      const data = await response.json();
      setComments([...comments, data.comment]);
      setNewComment("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (index) => {
    try {
      const response = await fetch(`${API_BASE}${index}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete comment.");
      }
      const newComments = comments.filter((comment, i) => i !== index);
      setComments(newComments);
    } catch (error) {
      console.error(error);
    }
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
            {comment.text}
            <button onClick={() => handleDelete(index)}>Delete Comment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
